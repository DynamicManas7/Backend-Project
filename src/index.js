import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();
connectDB();



















// import express from "express"
// const app=express()

// (async()=>{
    //         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)  
//     try{
//             app.on("error",(error)=>{
//                 console.log("ERR:",error);
//                 throw error
//                 })
//                 app.listen(process.env.PORT,()=>{
//                     console.log(`App is listening on port ${process.env.PORT}`);
//                 })
//     }catch(error){
//         console.error("ERROR:",error)
//         throw err
//     }
// })
