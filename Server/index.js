const mongoose  = require("mongoose");

const cookieParser =  require("cookie-parser");

const express =  require("express");

const PORT = process.env.PORT || 3000;

const cors = require("cors");

const checkRoute = require("./Routes/check")

const dataRoute = require("./Routes/Data");

const addRoute = require("./Routes/money")

const app= express();
const {checkForAuthentication} = require("./Middlewares/auth")


const userRoute = require("./Routes/User");

const logRoute = require("./Routes/Login");

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true
}))
app.use(cookieParser());
app.post("/api/logout",(req,res)=>{
    res.clearCookie("token");
    req.session = null;
    res.json({message:"Logged Out"});
})



app.use(express.json());

app.use(express.urlencoded({extended:false}));



app.use(checkForAuthentication);



mongoose.connect(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/Finance_Tracker')
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("Mongo Error", err));


app.use("/api/check",checkRoute);

app.use("/api/add",checkForAuthentication,addRoute);

app.use("/api/users",userRoute);

app.use("/api/login", logRoute);

app.use("/api/data",dataRoute)

app.listen(PORT, () => {
    console.log("Server running on port 3000");
});
