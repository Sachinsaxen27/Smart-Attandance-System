const mongoose = require('mongoose')
const { Schema } = mongoose;
const studentSchema= new Schema({
    name:String,
    rollnumber:Number, 
    fathername:String,
    mothername:String,
    fathermobile:Number,
    mothermobile:Number,
    email:String,
    password:String,
    address:String,
    mobile:Number,
    dob:Date,
    gender:String,
    currentedu:String,
    currentyear:String,
    stdbranch:String,
    image:String,
    city:String
},
    {
        timestamps: true
    })
module.exports=mongoose.model('student',studentSchema)