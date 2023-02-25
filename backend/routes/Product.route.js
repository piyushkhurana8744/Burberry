const express = require("express")

const app = express()

const {ProductModel} = require("../model/Product.model")

const productRouter = express.Router()

app.use(express.json())

productRouter.get("/",async(req,res)=>{
    const data = await ProductModel.find()
    res.send(data)
})


module.exports = productRouter
