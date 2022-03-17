const fs = require("fs");
const path = require("path");
// console.log("hello World");
let folderPath = process.argv[2];
// ["Path to Node", "Path to File", "Input given in terminal"];
// console.log(folderPath);
// let input = inputArr[2];
// console.log(input);
let extensions = {
  Audio: [".mp3"],
  Video: [".mp4", ".mkv"],
  Document: [".doc", ".pdf", ".txt", ".xlsx"],
  Image: [".jpeg", ".jpg", ".png", ".gif"],
  Software: [".exe"],
};
let folderExist = fs.existsSync(folderPath);
if (folderExist) {
  // we will code
  let files = fs.readdirSync(folderPath);
  //   console.log(files);
  for (let i = 0; i < files.length; i++) {
    let extName = path.extname(files[i]);
    let nameOfFolder = giveFolderName(extName);
    // console.log("Extension--", extName, " Folder--", nameOfFolder);
    let pathOfFolder = path.join(folderPath,nameOfFolder);
    let exist=fs.existsSync(pathOfFolder);
    if (exist) {
        moveFile(folderPath,pathOfFolder,files[i]);
    } else {
        fs.mkdirSync(pathOfFolder);
        moveFile(folderPath,pathOfFolder,files[i]);
    }
  }
} else {
  console.log("Please Enter the valid path!!!!");
}
function giveFolderName(ext) {
  for (let key in extensions) {
    let extArr = extensions[key];
    // console.log(extArr);
    for (let i = 0; i < extArr.length; i++) {
      if (extArr[i] == ext) {
        return key;
      }
    }
  }
  return "Others";
}
function moveFile(folderPath,pathOfFolder,fileName) {
 let sourcePath=path.join(folderPath,fileName);
 let destinationPath=path.join(pathOfFolder,fileName);
 fs.copyFileSync(sourcePath,destinationPath);
 fs.unlinkSync(sourcePath);   
}