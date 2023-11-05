"use strict";

var express = require('express');

var Student = require('../schema/student');

var router = express.Router();

var bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');

var fetchstudent = require('../middleware/fetchstudent');

var _require = require('express-validator'),
    body = _require.body,
    validationResult = _require.validationResult; // Route:1 New Student  Create 


router.post('/studentSingup', [body('name').isLength({
  min: 3,
  max: 15
}), body("email").isEmail(), body('password').isLength({
  min: 6
}), body('mobile').isLength({
  min: 10,
  max: 12
})], function _callee(req, res) {
  var success, errors, student, salt, secpass, data, jwt_Sign, jwttoken;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          success = false;
          errors = validationResult(req);

          if (errors.isEmpty()) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            success: success,
            errors: errors.array()
          }));

        case 4:
          _context.prev = 4;
          _context.next = 7;
          return regeneratorRuntime.awrap(Student.findOne({
            email: req.body.email
          }));

        case 7:
          student = _context.sent;

          if (!student) {
            _context.next = 10;
            break;
          }

          return _context.abrupt("return", res.status(409).json({
            success: success,
            errors: errors.array()
          }));

        case 10:
          _context.next = 12;
          return regeneratorRuntime.awrap(bcrypt.genSalt(10));

        case 12:
          salt = _context.sent;
          _context.next = 15;
          return regeneratorRuntime.awrap(bcrypt.hash(req.body.password, salt));

        case 15:
          secpass = _context.sent;
          _context.next = 18;
          return regeneratorRuntime.awrap(Student.create({
            name: req.body.name,
            email: req.body.email,
            password: secpass,
            mobile: req.body.mobile,
            address: req.body.address,
            dob: req.body.dob,
            image: req.body.image,
            currentedu: req.body.currentedu,
            currentyear: req.body.currentyear,
            stdbranch: req.body.stdbranch,
            fathername: req.body.fathername,
            mothername: req.body.mothername,
            fathermobile: req.body.fathermobile,
            mothermobile: req.body.mothermobile,
            gender: req.body.gender,
            city: req.body.city
          }));

        case 18:
          student = _context.sent;
          data = {
            student: {
              id: student.id
            }
          };
          console.log('sfas', data);
          jwt_Sign = "SachinSAXENA";
          jwttoken = jwt.sign(data, jwt_Sign);
          success = true;
          console.log({
            jwttoken: jwttoken
          });
          res.json({
            success: success,
            jwttoken: jwttoken
          });
          _context.next = 32;
          break;

        case 28:
          _context.prev = 28;
          _context.t0 = _context["catch"](4);
          console.log(_context.t0.message);
          res.status(500).send("Some Error Occurred");

        case 32:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 28]]);
}); // Router:2 Student Login

router.post("/studentlogin", [body('email').isEmail(), body('password').exists()], function _callee2(req, res) {
  var errors, _req$body, password, email, success, student, passwordCompare, payload, jwt_Sign, authtoken;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          // For Checking the error or not in your send data
          errors = validationResult(req);

          if (errors.isEmpty()) {
            _context2.next = 3;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            errors: errors.array()
          }));

        case 3:
          // Defactoring the password or email from the database as password or email
          _req$body = req.body, password = _req$body.password, email = _req$body.email;
          success = false;
          _context2.prev = 5;
          _context2.next = 8;
          return regeneratorRuntime.awrap(Student.findOne({
            email: email
          }));

        case 8:
          student = _context2.sent;

          if (student) {
            _context2.next = 11;
            break;
          }

          return _context2.abrupt("return", res.status(500).json({
            success: success,
            error: "Incorrect information"
          }));

        case 11:
          _context2.next = 13;
          return regeneratorRuntime.awrap(bcrypt.compare(password, student.password));

        case 13:
          passwordCompare = _context2.sent;

          if (passwordCompare) {
            _context2.next = 16;
            break;
          }

          return _context2.abrupt("return", res.status(500).json({
            error: "Incorrect information"
          }));

        case 16:
          payload = {
            student: {
              id: student.id
            }
          };
          console.log(payload);
          jwt_Sign = "SachinSAXENA";
          authtoken = jwt.sign(payload, jwt_Sign);
          res.json({
            success: true,
            authtoken: authtoken
          });
          _context2.next = 27;
          break;

        case 23:
          _context2.prev = 23;
          _context2.t0 = _context2["catch"](5);
          console.log(_context2.t0.message);
          res.status(500).send("Some Error Occurred");

        case 27:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[5, 23]]);
}); // Router:3 Get Student Data

router.get('/getstudent', fetchstudent, function _callee3(req, res) {
  var studentId, student;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          studentId = req.user;
          console.log(studentId);
          _context3.next = 5;
          return regeneratorRuntime.awrap(Student.findById(studentId).select('-password -_id -__v'));

        case 5:
          student = _context3.sent;
          // console.log('hj',student)
          res.json(student);
          _context3.next = 13;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0.message);
          res.status(500).send("Some Error Occurred");

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 9]]);
}); // Router :4 FOR UPDATEING INFO

router.get('/findstudent/:mobile', function _callee4(req, res) {
  var mobile, data;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          mobile = req.params.mobile;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Student.findOne({
            mobile: mobile
          }, {
            name: 1,
            currentedu: 1,
            currentyear: 1,
            stdbranch: 1,
            image: 1
          }));

        case 3:
          data = _context4.sent;
          res.json(data);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
}); // Router:5 FOR DELETEING STUDENT ACCOUNT

router["delete"]('/deletestudent/:id', function _callee5(req, res) {
  var deletid, deltedstudent;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          deletid = req.params.id;
          _context5.next = 3;
          return regeneratorRuntime.awrap(Student.findByIdAndDelete(deletid));

        case 3:
          deltedstudent = _context5.sent;
          console.log(deltedstudent);
          res.status(200).send("Account Has Been Successfully Deleted");

        case 6:
        case "end":
          return _context5.stop();
      }
    }
  });
}); // ROUTER 6: FOR UPDATING STUDENT DETAILS

router.put("/updatenote/:id", fetchstudent, function _callee6(req, res) {
  var _req$body2, mobile, year, newstudent, student;

  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _req$body2 = req.body, mobile = _req$body2.mobile, year = _req$body2.year;
          newstudent = {};

          if (mobile) {
            newstudent.mobile = mobile;
          }

          if (year) {
            newstudent.year = year;
          }

          _context6.next = 6;
          return regeneratorRuntime.awrap(Student.findById(req.params.id));

        case 6:
          student = _context6.sent;

          if (student) {
            _context6.next = 9;
            break;
          }

          return _context6.abrupt("return", res.status(404).send(" Not found"));

        case 9:
          if (!(student.user.toString() !== req.user)) {
            _context6.next = 11;
            break;
          }

          return _context6.abrupt("return", res.status(401).send("Not ALlowed"));

        case 11:
          _context6.next = 13;
          return regeneratorRuntime.awrap(Student.findByIdAndUpdate(req.params.id, {
            $set: newstudent
          }, {
            "new": true
          }));

        case 13:
          student = _context6.sent;
          res.json({
            student: student
          });

        case 15:
        case "end":
          return _context6.stop();
      }
    }
  });
});
module.exports = router;