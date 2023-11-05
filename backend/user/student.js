const express=require('express')
const Student=require('../schema/student')
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchstudent=require('../middleware/fetchstudent')
const {body,validationResult}=require('express-validator');
const Attendance = require('../schema/Attendance');

// Route:1 New Student  Create 
router.post('/studentSingup',[
    body('name').isLength({min:3,max:15}) , 
    body("email").isEmail(),
    body('password').isLength({min:6}),
    body('mobile').isLength({min:10,max:12})]
    ,async(req , res) => {
    let success=false
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({success,errors: errors.array() });}
        try{
        let student= await Student.findOne({email:req.body.email})
        if(student){
            return res.status(409).json({success,errors: errors.array() });
        }
        const salt = await bcrypt.genSalt(10)
        const secpass= await bcrypt.hash(req.body.password,salt)
        student= await Student.create({
            name: req.body.name,
            email: req.body.email,
            rollnumber:req.body.rollnumber,
            password:secpass,
            mobile:req.body.mobile,
            address:req.body.address,
            dob:req.body.dob,
            image: req.body.image,
            currentedu:req.body.currentedu,
            currentyear:req.body.currentyear,
            stdbranch:req.body.stdbranch,
            fathername:req.body.fathername,
            mothername:req.body.mothername,
            fathermobile:req.body.fathermobile,
            mothermobile:req.body.mothermobile,
            gender:req.body.gender,
            city:req.body.city
        })
        const data={
            student:{
                id:student.id
            }
        }
        // console.log('sfas',data)
        const jwt_Sign ="SachinSAXENA"
        const jwttoken= jwt.sign(data, jwt_Sign)
        success=true
        // console.log({jwttoken})
        res.json({success,jwttoken})
    }catch(error){
        // console.log(error.message)
        res.status(500).send("Some Error Occurred")
    }
})
// Router:2 Student Login
router.post("/studentlogin", [
    body('email').isEmail(),
    body('password').exists()
    ],async(req , res) => {
    // For Checking the error or not in your send data
    const errors = validationResult(req);
    if (!errors.isEmpty()){return res.status(400).json({ errors: errors.array() });}
    // Defactoring the password or email from the database as password or email
    const {password,email} = req.body
    let success=false
try {    
    // finding the email
    let student=await Student.findOne({email})
    if (!student){
        return res.status(500).json({success,error:"Incorrect information"})
    }
    // Comparing the given password and database password
    const passwordCompare= await bcrypt.compare(password,student.password)
    if (!passwordCompare){
        return res.status(500).json({error:"Incorrect information"})
    }
    const payload={
        student:{
                id:student.id
            }
        }
    // console.log(payload)
    const jwt_Sign ="SachinSAXENA"
    const authtoken= jwt.sign(payload , jwt_Sign)
   
    res.json({success:true,authtoken})
} catch (error) {
    // console.log(error.message)
    res.status(500).send("Some Error Occurred")
}
})
// Router:3 Get Student Data
router.get('/getstudent',fetchstudent,async(req,res)=>{
    try {
        const  studentId=req.user;
        // console.log(studentId)
        const student=await Student.findById(studentId).select('-password -_id -__v')
        res.json(student)
    } catch (error) {
        res.status(500).send("Some Error Occurred")
    }
})

// Router :4 FOR UPDATEING INFO
router.get('/findstudent/:rollnumber',async(req,res)=>{
    const rollnumber=req.params.rollnumber
    const data = await Student.findOne({rollnumber:rollnumber},{name:1,currentedu:1,currentyear:1,stdbranch:1,rollnumber:1,_id:1})
    
    res.json(data)   
})

// Router:5 FOR DELETEING STUDENT ACCOUNT
router.delete('/deletestudent/:id',async(req,res)=>{
    const deletid=req.params.id
    const deltedstudent=await Student.findByIdAndDelete(deletid)
    
    res.status(200).send("Account Has Been Successfully Deleted")
})

// ROUTER 6: FOR UPDATING STUDENT DETAILS
router.put("/updatenote/:id",fetchstudent,async(req , res) => {
        const{mobile,year}=req.body
        const newstudent={}
        if(mobile){newstudent.mobile=mobile}
        if(year){newstudent.year=year}
        let student =await Student.findById(req.params.id)
        if(!student){return res.status(404).send(" Not found")}
        if(student.user.toString() !== req.user){return res.status(401).send("Not ALlowed")}
        student= await Student.findByIdAndUpdate(req.params.id,{$set:newstudent},{new:true})

        res.json({student})
    })

// ROUTER 7: FOR SEEING STUDENT ATTENDANCE BY ITSELF
router.get('/getstudentA/:rollnumber',async(req,res)=>{
    const {rollnumber}=req.params
    const studentA=await Attendance.find({rollnumber:rollnumber},{name:1,rollnumber:1,currentedu:1,currentyear:1,stdbranch:1,date:1})
    res.json(studentA)
})

module.exports=router