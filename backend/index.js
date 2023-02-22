const express = require('express')
const app = express()
require('dotenv').config()
const {connection} = require("./configs/db")

// -------------------------------------------------------------
app.use(express.json())



// -------------------------SERVER-------------------------------
app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Connection with server Established")
    } catch (error) {
        console.log("Something went wrong",error.message)
    }
})