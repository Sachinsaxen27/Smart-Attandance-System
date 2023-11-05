const mongoose = require('mongoose')
const { Schema } = mongoose;
const adminSchema = new Schema({
    name: {
        type: String,
        // required:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    address: String,
    mobile: Number,

    dob: Date,
    gender:String,
    image:String
},
    {
        timestamps: true
    })
module.exports = mongoose.model('admin', adminSchema)