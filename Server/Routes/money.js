const express = require("express");
const Data  = require("../Model/Add")

const {dashboardEntry} = require("../Controller/User")

const router = express.Router();

router.get("/",(req,res)=>{
    return res.json({msg:"Success"})
})

router.post("/",dashboardEntry);

module.exports = router

