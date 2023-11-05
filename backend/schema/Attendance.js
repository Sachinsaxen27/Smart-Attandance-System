const mongoose = require('mongoose')
const { Schema } = mongoose;
const AttandanceSchema= new Schema({
    name:String, 
    currentedu:String,
    currentyear:String,
    stdbranch:String,
    rollnumber:Number,
    date: { type: Date }
});
module.exports=mongoose.model('attendance',AttandanceSchema)