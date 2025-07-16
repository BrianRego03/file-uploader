const {Router}=require("express");
const { loadDrive } = require("../controllers/driveController");


const driveRouter=Router();

driveRouter.get("/:id",loadDrive);

module.exports=driveRouter;