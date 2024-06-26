import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config()

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`💿 Server is running at port:${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log(`MONGO DB connection FAILED !!!`,err);
})



















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
