import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

async function connectDb(){
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@gather.d1ehzyo.mongodb.net/?retryWrites=true&w=majority&appName=Gather`)
}

export default connectDb