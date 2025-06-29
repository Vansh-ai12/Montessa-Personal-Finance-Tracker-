const mongoose = require("mongoose");

const addSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    title:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    paymentMethod:{
        type:String,
        required:true
    }
},{timestamps:true})

const Data = mongoose.model('newData',addSchema);

module.exports = Data;