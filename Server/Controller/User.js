const User = require("../Model/User");

const Transaction = require("../Model/Add");

async function createNewUser(req,res){
    const body = req.body;
   
    if(
        !body||
        !body.username||
        !body.email||
        !body.password
        
    ){
        return res.status(400).json({msg:"All fields are required"});
    }
    await User.create({
        username:body.username,
        email:body.email,
        password:body.password,
    })
    return res.status(201).json({msg:"Success"});
}

async function dashboardEntry(req,res){
    const body = req.body;
     console.log("📥 Incoming data from frontend:", body);
    if(
        !body||
        !body.title||
        !body.amount||
        !body.type||
        !body.date||
        !body.paymentMethod
        
    ){
        return res.status(400).json({ msg: "All fields are required" });
    }

    if(body.type=="expense" && !body.category){
        return res.status(400).json({ msg: "Category is required for expenses" });
    }
    const userId = req.user._id;
    await Transaction.create({
        user:userId,
        title:body.title,
        amount:body.amount,
        type:body.type,
        date:body.date,
        category:body.category,
        paymentMethod:body.paymentMethod
    })

    return res.status(201).json({msg:"Information added successfully"})

}


module.exports = {
    createNewUser,
    dashboardEntry
}