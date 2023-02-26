const express = require('express')
const app = express()
require('dotenv').config()

const cors=require("cors")
const {connection} = require("./configs/db")

const userRouter=require("./routes/User.route")

const productRouter = require("./routes/Product.route")
const orderRouter = require('./routes/Order.route')

app.use(cors())
// -------------------------------------------------------------
app.use(express.json())

app.use("/user",userRouter)

app.use("/products",productRouter)
app.use("/orders",orderRouter)

// -------------------------SERVER-------------------------------
app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Connection with server Established")
    } catch (error) {
        console.log("Something went wrong",error.message)
    }
})