
const { getUser } = require("../Service/auth");


function checkForAuthentication(req, res, next) {
    const token = req.cookies?.token;  // Note: it should be req.cookies (plural)
    req.user = null;

    if (!token) {
        return next();
    }

    const user = getUser(token);
    req.user = user;
    return next();
}

module.exports={
    checkForAuthentication
}