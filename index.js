// async

//  console.log("start exc -> ");

let a = 10;
let b = 0;

let waitdata = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(40);
  }, 2000);
});

waitdata.then((data) => {
  b = data;
  console.log(a + b);
});
