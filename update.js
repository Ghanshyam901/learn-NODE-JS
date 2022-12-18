const dbConnect = require('./mongodb')

const update =async ()=>{
    let data = await dbConnect();
    // console.log(data);
    let result =await data.updateOne(
        {name:"imac"},{$set:{brand:"samsung",price:98000}
    });
    console.log(result)
}
update();