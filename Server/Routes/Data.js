const express = require("express");


const router  = express.Router();

const User = require("../Model/User");

const {getUser} = require("../Service/auth");

const Transaction = require("../Model/Add");

router.get("/" ,async(req,res)=>{
    try{
        const token = req.cookies?.token;
        const user =  getUser(token);
        
        if (!token) {
            return res.status(401).json({ error: "No token provided" });
        }
        if (!user) {
            return res.status(401).json({ error: "Invalid token" });
        }
        const transactions = await Transaction.find({ user: user._id });


        res.status(200).json({ transactions });
    }catch(err){
        console.error("Error fetching transactions:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }

} )

module.exports = router;