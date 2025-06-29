const express = require("express");



const router = express.Router();

const {createNewUser} = require("../Controller/User")


router.get("/",(req,res)=>{
     return res.json({msg:"user created"});
})

router.post("/",createNewUser);


module.exports = router;