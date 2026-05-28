import mongoose from "mongoose"
import dotenv from "dotenv"
import dns from "dns"

// Configure DNS to prevent querySrv ETIMEOUT on Windows
dns.setServers(["8.8.8.8", "1.1.1.1"])

dotenv.config({ override: true })
export const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected successfully")
    } catch (error) {
       console.log(error,error.message) 
    }
}