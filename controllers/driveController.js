const { fetchFolderByID, createFolder, createFile } = require("../db/query");

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

const createFileDrive=async (req,res)=>{
    if (!req.file) {
         return res.status(400).send('No file uploaded');
         }
    
    const parent = createFile(req.file.filename,req.body.parentid,req.file.size);
    res.redirect("/drive/" + parent);
    
    
}

module.exports={loadDrive,createFolderDrive,createFileDrive};