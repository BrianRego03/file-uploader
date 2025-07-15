const bcrypt=require("bcryptjs");
const {createUser,checkAllUsers}=require("../db/query");

const loadSignUp=(req,res)=>{
    res.render("signUp");
}

const saveUser=async(req,res,next)=>{
    try{
        console.log(req.body);
        const dbStatus = await checkAllUsers(req.body.username);
        if(dbStatus){
            res.redirect("/signup");
        }
        const hashedPassword= await bcrypt.hash(req.body.password,10);
        
        await createUser(req.body.username,hashedPassword);
        res.redirect("/")
    }catch(error){
        console.error(error);
        next(error);
    }
}

module.exports={saveUser,loadSignUp};