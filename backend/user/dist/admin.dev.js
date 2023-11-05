"use strict";

var express = require('express');

var User = require('../schema/User');

var router = express.Router();

var bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');

var fetchuser = require('../middleware/fetchuser');

var _require = require('express-validator'),
    body = _require.body,
    validationResult = _require.validationResult;

var Student = require('../schema/student'); // Route:1 New Admin Create 


router.post('/adminSingup', [body('name').isLength({
  min: 3,
  max: 15
}), body("email").isEmail(), body('password').isLength({
  min: 6
}), body('mobile').isLength({
  min: 10,
  max: 12
})], function _callee(req, res) {
  var success, errors, user, salt, secpass, photobuffer, data, jwt_Sign, jwttoken;
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
          return regeneratorRuntime.awrap(User.findOne({
            email: req.body.email
          }));

        case 7:
          user = _context.sent;

          if (!user) {
            _context.next = 10;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
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
          photobuffer = req.body.image;
          console.log("Back", photobuffer);
          _context.next = 20;
          return regeneratorRuntime.awrap(User.create({
            name: req.body.name,
            email: req.body.email,
            password: secpass,
            mobile: req.body.mobile,
            address: req.body.address,
            dob: req.body.dob,
            gender: req.body.gender,
            image: photobuffer
          }));

        case 20:
          user = _context.sent;
          data = {
            user: {
              id: user.id
            }
          };
          jwt_Sign = "SachinSAXENA";
          jwttoken = jwt.sign(data, jwt_Sign);
          success = true;
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
}); // Router:2 User Login

router.post("/adminlogin", [body('email').isEmail(), body('password').exists()], function _callee2(req, res) {
  var errors, _req$body, password, email, success, user, passwordCompare, payload, jwt_Sign, authtoken;

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
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 8:
          user = _context2.sent;

          if (user) {
            _context2.next = 11;
            break;
          }

          return _context2.abrupt("return", res.status(500).json({
            success: success,
            error: "Incorrect information"
          }));

        case 11:
          _context2.next = 13;
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

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
            user: {
              id: user.id
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
}); // Router:3 Get User Data

router.get('/getadmin', fetchuser, function _callee3(req, res) {
  var userId, user;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          userId = req.user;
          console.log("gd", userId);
          _context3.next = 5;
          return regeneratorRuntime.awrap(User.findById(userId).select('-password -_id -__v'));

        case 5:
          user = _context3.sent;
          console.log(user);
          res.send(user);
          _context3.next = 14;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0.message);
          res.status(500).send("Some Error Occurred");

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 10]]);
}); // Router :4 TO VIEW ALL STUDENT LIST

router.get("/getstudent", function _callee4(req, res) {
  var student;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(Student.find({}, {
            name: 1,
            email: 1,
            mobile: 1,
            currentedu: 1,
            currentyear: 1,
            stdbranch: 1,
            image: 1,
            _id: 1
          }));

        case 2:
          student = _context4.sent;
          res.json(student);

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
}); // Router:5 TO VIEW ALL ADMIN LIST

router.get('/adminlist', function _callee5(req, res) {
  var adminlist;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(User.find({}, {
            name: 1,
            email: 1,
            mobile: 1,
            _id: 1
          }));

        case 2:
          adminlist = _context5.sent;
          res.json(adminlist);

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
}); // Router:6 To  DELETE THE ADMIN ACCOUNT

router["delete"]('/admindelete/:id', function _callee6(req, res) {
  var deleteid, deleteduser;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          deleteid = req.params.id;
          _context6.next = 3;
          return regeneratorRuntime.awrap(User.findByIdAndDelete(deleteid));

        case 3:
          deleteduser = _context6.sent;
          console.log(deleteduser);
          res.status(200).send('Account Has been Successfully deleted');

        case 6:
        case "end":
          return _context6.stop();
      }
    }
  });
}); // 643d6356ffe4df3c7297b077

module.exports = router;