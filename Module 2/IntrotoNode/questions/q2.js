// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type
let fs = require("fs");
let path = require("path");
let arr = ["audio", "video", "image", "software", "documents", "applications", "other"];
let arr2=["a","b","c","d"];
let extension=[".mp3",".mp4",".jpg",".exe",".docx",".apk",".rar"];
let organisePath=path.join(__dirname,"Organise");
if (!fs.existsSync(organisePath)) {
    fs.mkdirSync(organisePath);
}
// console.log(arr);
for (let index = 0; index < arr.length; index++) {
    let folderPath=path.join(organisePath,arr[index]);
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }
    for (let j = 0; j < arr2.length; j++) {
        let fileName=arr2[j]+extension[index];
        let filepath=path.join(folderPath,fileName);
        fs.writeFileSync(filepath,"");

        
    }
}