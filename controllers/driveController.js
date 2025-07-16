const { fetchFolderByID, createFolder } = require("../db/query");

const loadDrive=async(req,res)=>{
    const folderID=req.params.id;
    const folder=await fetchFolderByID(+(folderID));
    console.log(folder);
    res.render("drive",{folder:folder})
}

const createFolderDrive=async(req,res)=>{
    // console.log(req.user);
    const parent = await createFolder(req.body.name,+(req.body.parentid),+(req.user.id));
    res.redirect("/drive/" + parent);

}

module.exports={loadDrive,createFolderDrive};