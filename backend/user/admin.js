const express=require('express')
const User=require('../schema/User')
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchuser=require('../middleware/fetchuser')
const {body,validationResult}=require('express-validator')
const Student= require('../schema/student')
// Route:1 New Admin Create 
router.post('/adminSingup',[
    body('name').isLength({min:3,max:15}) , 
    body("email").isEmail(),
    body('password').isLength({min:6}),
    body('mobile').isLength({min:10,max:12})],async(req , res) => {
    let success=false
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({success,errors: errors.array() });}
        try{
        let user= await User.findOne({email:req.body.email})
        if(user){
            return res.status(400).json({success,errors: errors.array() });
        }
        const salt = await bcrypt.genSalt(10)
        const secpass= await bcrypt.hash(req.body.password,salt)
        const photobuffer=req.body.image
        user= await User.create({
            name: req.body.name,
            email: req.body.email,
            password:secpass,
            mobile:req.body.mobile,
            address:req.body.address,
            dob:req.body.dob,
            gender:req.body.gender,
            image:photobuffer
        })
        const data={
            user:{
                id:user.id
            }
        }
        const jwt_Sign ="SachinSAXENA"
        const jwttoken= jwt.sign(data, jwt_Sign)
        success=true
        res.json({success,jwttoken})
    }catch(error){
        res.status(500).send("Some Error Occurred")
    }
})
// Router:2 User Login
router.post("/adminlogin", [
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
    let user=await User.findOne({email})
    if (!user){
        return res.status(500).json({success,error:"Incorrect information"})
    }
    // Comparing the given password and database password
    const passwordCompare= await bcrypt.compare(password,user.password)
    if (!passwordCompare){
        return res.status(500).json({error:"Incorrect information"})
    }
    const payload={
            user:{
                id:user.id
            }
        }
    const jwt_Sign ="SachinSAXENA"
    const authtoken= jwt.sign(payload , jwt_Sign)
   
    res.json({success:true,authtoken})
} catch (error) {
    res.status(500).send("Some Error Occurred")
}
})
// Router:3 Get User Data
router.get('/getadmin',fetchuser,async(req,res)=>{
    try {
        const  userId=req.user;
        const user=await User.findById(userId).select('-password -_id -__v')
        res.send(user)
    } catch (error) {
        res.status(500).send("Some Error Occurred")
    }
})

// Router :4 TO VIEW ALL STUDENT LIST
router.get("/detstudent", async(req,res)=>{
    const student = await Student.find({},{name:1,email:1,rollnumber:1,currentedu:1,currentyear:1,stdbranch:1,image:1,_id:1})
    res.json(student)
})

// Router:5 TO VIEW ALL ADMIN LIST
router.get('/adminlist',async(req,res)=>{
    const adminlist =await User.find({},{name:1,email:1,mobile:1,_id:1})
    res.json(adminlist)
})

// Router:6 To  DELETE THE ADMIN ACCOUNT
router.delete('/admindelete/:id',async(req, res)=>{
    const deleteid=req.params.id
    const deleteduser=await User.findByIdAndDelete(deleteid)
    res.status(200).send('Account Has been Successfully deleted')
})

// 643d6356ffe4df3c7297b077

module.exports=router