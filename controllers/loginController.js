const passport=require("passport");
const fs = require("fs");
const path = require("path");

const loadLogin=(req,res)=>{
    res.render("login",)
}

const ensureUploadsFolder = (req, res, next) => {
    const uploadsPath = path.join(__dirname, "..", "uploads");
    if (!fs.existsSync(uploadsPath)) {
        fs.mkdirSync(uploadsPath);
    }
    next();
};

const userLogin = [
    ensureUploadsFolder, 
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login"
    })
];

module.exports={userLogin,loadLogin};