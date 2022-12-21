// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);

//  mongoose.connect("mongodb://localhost:27017/e-comm");
// const productSchmeas = new mongoose.Schema({
//   name: String,
//   price: Number,
//   brand: String,
//   category: String,
// });

// const saveINdb = async () => {
//   const product = mongoose.model("products", productSchmeas);
//   let data = new product({
//     name: "phone i s1",
//     price: 10500,
//     brand: "SAMSUNG",
//     category: "phone",
//   });
//   let result = await data.save();
//   console.log(result);
// };
// // saveINdb();

// const updateIndb =  async()=>{
//     const product = mongoose.model('products',productSchmeas);
//     let data = await product.updateOne({name:"iojhghhhhh s1"},
//     {
//         $set:{price:123456,name:"iphone 15"}
//     }
//     )
//     console.log(data);
// }

// // updateIndb();

// const DeleteInDb =async ()=>{
//     const product = mongoose.model("products",productSchmeas);
//     let data = await product.deleteOne({name:"iphone 15"});
//     console.log(data);
// }

// // DeleteInDb()

// const FindInDb =async()=>{
//     const product = mongoose.model("products",productSchmeas);
//     let data = await product.find({name:"iojhghhhhh s1"});
//     console.log(data);
// }
// FindInDb();