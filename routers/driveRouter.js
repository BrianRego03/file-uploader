const {Router}=require("express");
const { loadDrive,createFolderDrive } = require("../controllers/driveController");


const driveRouter=Router();

driveRouter.post("/create",createFolderDrive);
driveRouter.get("/:id",loadDrive);

module.exports=driveRouter;