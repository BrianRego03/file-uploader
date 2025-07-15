const passport=require("passport");

const loadLogin=(req,res)=>{
    res.render("login",)
}

const userLogin=passport.authenticate("local",{
    successRedirect:"/",
    failureRedirect:"/login"
})

module.exports={userLogin,loadLogin};