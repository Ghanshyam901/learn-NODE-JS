// const express = require('express');
// const dbConnect = require('./mongodb');
// const mongodb = require('mongodb');

// const app = express();

// app.use(express.json());

// app.get('/',async (req,res)=>{
//     let data =await dbConnect();
//     data =await data.find().toArray();
//     console.log(data);
//     res.send(data);
// });



// app.post('/post', async(req,res)=>{     /// post data
//     let data = await dbConnect();
//     data = await data.insert(req.body);
//     console.log(data);
//     res.send(data);
// })

// app.put('/:name', async(req,res)=>{     // for edit
//     let data = await dbConnect();
//     // console.log(req.body);
//     let result = await data.updateOne(
//         {name: req.params.name},
//         { $set:req.body}
//         )
//     res.send({result:'updated'});
// })

// app.delete('/:id',async(req,res)=>{
//         // console.log(req.params.id);
//         const data = await dbConnect();
//         const result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
//         res.send(result);
//         // res.send("done");
// })


// app.listen(4000); 