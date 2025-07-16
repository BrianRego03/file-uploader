const prisma =require("./prismaClient");

async function createUser(username,password){
    const user = await prisma.user.create({
        data: {
            name: username,
            password: password
        },
        select:{
            id:true
        }
    })

    await prisma.folder.create({
        data:{
            name:"root",
            userid:user.id
        }
    })

    return;
}

async function createFolder(folderName,parentid,userid){
    const folder = await prisma.folder.create(
        {
            data: {
                name: folderName,
                parentid: parentid,
                userid:userid
            },
            select: {
                parentid: true
            }
        }
    )
    return folder.parentid;
}

async function createFile(fileName,parentid){
    const file=await prisma.file.create({
        data:{
            name:fileName,
            parentid: parentid
        },
        select:{
            id:true
        }
    });
    return file.id;
}

async function fetchUserByName(username) {
    const user= await prisma.user.findUnique({
        where:{
            name:username
        }
    });

    return user;
    
}

async function fetchUserById(id) {
    const user= await prisma.user.findUnique({
        where:{
            id:id
        }
    });

    return user;
    
}

async function checkAllUsers(username) {
    const user=await prisma.user.findUnique({
        where:{
            name:username
        }
    });

    if(user){
        return 0;
    }else{
        return 1;
    }

    
}

async function fetchFolderByID(id){
    const folder=await prisma.folder.findUnique({
        where:{
            id:id
        },
        include:{
            children:true
        }
    });
    return folder;
}

module.exports= {fetchUserById,fetchUserByName,createFile,createFolder,createUser,checkAllUsers,
    fetchFolderByID
};