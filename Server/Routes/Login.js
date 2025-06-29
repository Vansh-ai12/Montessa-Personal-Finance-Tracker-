const express = require("express");

const User  = require("../Model/User");

const {setUser} = require("../Service/auth")

const user=[];

const router = express.Router();

router.get("/",(req,res)=>{
    return res.json({user})
})

router.post("/",async(req,res)=>{
    const {email,password} = req.body;
    
    const entry = {email,password};


    user.push(entry);

    const AUser = await User.findOne({email,password});
    if(!AUser){
        return null;
    }

    const token = setUser(AUser);
    res.cookie("token",token,{
        httpOnly:true,
        maxAge:7*24*60*60*1000
    });
    return res.status(201).json({msg:"Success"});

})

module.exports = router;

