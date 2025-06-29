const jwt = require("jsonwebtoken");

const secret = "Vansh@678";

function setUser(user){
    return jwt.sign({
        _id:user._id,
        email:user.email,
        password:user.password,
    },secret)
}


function getUser(token){
    if(!token) return null;
    try {
        return jwt.verify(token, secret);
      } catch (err) {
        console.error("Invalid JWT:", err.message);  // Optional log
        return null; // Return null if verification fails
      }
    
}


module.exports = {
    setUser,
    getUser,
}