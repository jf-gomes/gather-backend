import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

async function connectDb(){
    await mongoose.connect(`mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_ADMIN_PASSWORD}@gather.d1ehzyo.mongodb.net/?retryWrites=true&w=majority&appName=Gather`)
}

export default connectDb