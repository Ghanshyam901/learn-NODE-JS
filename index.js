const fs = require('fs') /// file system module;
const path = require('path');


const dirPath = path.join(__dirname,'files');
console.log(dirPath);

// for(i=1; i<=5; i++){
//     fs.writeFileSync(dirPath+"/hellooo"+i+".js","simp file");
//     // fs.writeFileSync(dirPath+`/hello${i}.txt`,"simple file creation ");
// }

// fs.readdir(dirPath,(err, filess)=>{
//     console.log(filess);
// });

fs.readdir(dirPath,(err, filess)=>{
    filess.forEach((item)=>{
        console.log( "file name is -> "+item);
    })
});