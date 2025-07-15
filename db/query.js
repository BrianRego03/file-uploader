import prisma from "./prismaClient";

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

async function createFolder(folderName,parentid){
    const folder = await prisma.folder.create(
        {
            data: {
                name: folderName,
                parentid: parentid
            },
            select: {
                id: true
            }
        }
    )
    return folder.id;
}

