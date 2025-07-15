const {Router}=require("express");

const {loadSignUp,saveUser}=require("../controllers/signUpController")

signUpRouter=Router();

signUpRouter.get("/",loadSignUp);
signUpRouter.post("/",saveUser);

module.exports=signUpRouter;