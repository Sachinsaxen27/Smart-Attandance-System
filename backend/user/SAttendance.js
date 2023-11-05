const express=require('express')
const Attendance=require('../schema/Attendance')
const router = express.Router();
const moment =require('moment-timezone')

// Router:1 FOR ADDING STUDENT ATTENDANCES
router.post('/addattendance',async(req,res)=>{
   try{ 
       const utcdate=moment.utc(req.body.date)
       const localDate = utcdate.tz('Asia/Kolkata') 
    let attendance= await Attendance.findOne({rollnumber:req.body.rollnumber,date:localDate})
        if(attendance){
                return res.status(200).json({message:"Your today Attendance has been done"});
        }   
    attendance= await Attendance.create({
        name: req.body.name,
        rollnumber:req.body.rollnumber,
        currentedu:req.body.currentedu,
        currentyear:req.body.currentyear,
        stdbranch:req.body.stdbranch,
        date:localDate
    })
    const saveattendance= await attendance.save()  
    res.json({saveattendance})
}catch(error){
    res.status(500).send("Some Error Occurred")
}
})

// ROUTER:2 FOR FETCH ATTENDANCE LIST
router.get('/attendancelist',async(req,res)=>{
    try {
        const student = await Attendance.find({},{name:1,rollnumber:1,currentedu:1,currentyear:1,stdbranch:1,date:1})
        res.json(student)
    } catch (error) {
        res.status(500).send("Some Error Occurred")
    }
})
// ROUTER 3 FOR FILTER LIST
router.get('/filterattendance/:course/:year/:branch',async(req,res)=>{
    try{
        const {course,year,branch}=req.params
        const student= await Attendance.find({currentedu:course,currentyear:year,stdbranch:branch},{name:1,mobile:1,currentedu:1,currentyear:1,stdbranch:1,date:1})
        res.json(student)
    }
    catch(error){
        res.status(500).send("Some Error Occurred")
    }
})

//ROUTER 4 FOR FILTER LIST ACCORDING TO DATE
router.get('/datelist/:date',async(req,res)=>{
    try{
        const dates=req.params.date
        const student= await Attendance.find({date:dates},{name:1,mobile:1,currentedu:1,currentyear:1,stdbranch:1,date:1})
        res.json(student)
    }catch(error){
        res.status(500).send("Some Error Occurred")
    }
}) 


module.exports=router