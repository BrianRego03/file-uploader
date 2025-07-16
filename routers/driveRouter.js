const {Router}=require("express");
const { loadDrive,createFolderDrive } = require("../controllers/driveController");
const upload=require("../config/upload");


const driveRouter=Router();

driveRouter.post("/create",createFolderDrive);
driveRouter.post("/file/create",upload.single('file'),createFileDrive);
driveRouter.get("/:id",loadDrive);

module.exports=driveRouter;