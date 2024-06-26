import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"
import dotenv from "dotenv"
dotenv.config()
const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGO_URI}`)

            console.log(`\n MongoDB Connected!! DB HOST: ${connectionInstance.connection.host}`)
       
    }
    catch(error){
        console.log("MONGODB connection Failed",error);
        process.exit(1)
    }
}
export default connectDB;