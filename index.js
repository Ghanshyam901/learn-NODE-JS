const http = require('http');

// function test (b){
//     return b*10;
// }
// console.log(test(2)); //20

// const arr =(a)=>{    // arrow function
//     return a +20;
// }
// console.log(arr(8)); // 28 

http.createServer((req, res)=>{
    res.write(" <h1>heelo this is responseed..</h1>");
    res.end();
}).listen(4000);

