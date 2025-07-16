console.log("scripts.js loaded");
function toggleForm(){
    console.log("hello")
    document.getElementById("fileForm").style.display="none";
    if(document.getElementById("folderForm").style.display==="none"){
        document.getElementById("folderForm").style.display="block";
    }else{
        document.getElementById("folderForm").style.display="none";
    }

}


function toggleFileForm(){
    console.log("hello");
    document.getElementById("folderForm").style.display="none";
    if(document.getElementById("fileForm").style.display==="none"){
        
        document.getElementById("fileForm").style.display="block";
    }else{
        document.getElementById("fileForm").style.display="none";
    }

}

