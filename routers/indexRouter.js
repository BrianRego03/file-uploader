const {Router}=require("express");

const {loadIndex}=require("../controllers/indexController")

indexRouter = Router();

indexRouter.get("/",loadIndex);

module.exports=indexRouter;