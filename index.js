const fs = require('fs') /// file system module;
const path = require('path');
const dirpath = path.join(__dirname,'crud');
const filePath = `${dirpath}/orange.txt`;

// fs.writeFileSync(filePath,"this is simple crud file ") // crate file

// fs.readFile(filePath,(err , item)=>{     //read
//     console.log(item);
// });

// fs.readFile(filePath,'utf8',(err , item)=>{   // read
//     console.log(item);
// });

// fs.appendFile(filePath," hello i am simple file",(err)=>{   // update
//     if(!err){
//         console.log("upated successfullt");
//     }
// })

// fs.rename(filePath,`${dirpath}/apple.txt`,(err)=>{
//         if(!err){
//             console.log("file name is updated");
//         }
// })

// fs.unlinkSync(`${dirpath}/apple.txt`);  /// delete file


