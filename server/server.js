import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import dns from 'node:dns';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
dns.setServers(['8.8.8.8', '1.1.1.1']);

//App config
const app = express()
const PORT = process.env.PORT || 4000
connectDB()
connectCloudinary

//middle ware 
app.use(express.json())  //what ever request pass this json
app.use(cors())             //we can access this in any ip

//API endpoint
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)


app.get('/', (req,res)=>{
    res.send("API Working")

})

app.listen(PORT, ()=> console.log(`Server started on PORT : ` +PORT))

