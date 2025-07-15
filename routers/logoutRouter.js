const {Router}=require("express");
const{handleLogOut}=require("../controllers/logOutControllers")

logOutRouter=Router();

logOutRouter.get("/",handleLogOut);


module.exports=logOutRouter;