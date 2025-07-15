const {Router}=require("express");
const{handleLogOut}=require("../controllers/logoutController")

logOutRouter=Router();

logOutRouter.get("/",handleLogOut);


module.exports=logOutRouter;