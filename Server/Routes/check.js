const express  = require("express");

const router = express.Router();

router.get("/",(req,res)=>{
    if(req.user){
        return res.status(200).json({loggedIn:true});
    }
    else{
        return res.status(401).json({ loggedIn: false });
    }
})

module.exports = router;