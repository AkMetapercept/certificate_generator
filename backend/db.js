const mongoose=require("mongoose");
require("dotenv").config()
const connectDb=async ()=>{
    mongoose.connect(process.env.MONGO_DB).then(()=>{
        console.log("Database connectd...");
    })
}
module.exports=connectDb;