const { fetchFolderByID } = require("../db/query");

const loadDrive=async(req,res)=>{
    const folderID=req.params.id;
    const folder=await fetchFolderByID(folderID);
    console.log(folder);
}

module.exports={loadDrive};