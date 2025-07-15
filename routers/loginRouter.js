const {Router}=require("express");
const { loadLogin, userLogin } = require("../controllers/loginController");


loginRouter = Router();

loginRouter.get("/",loadLogin);
loginRouter.post("/",userLogin);

module.exports=loginRouter;
