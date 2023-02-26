const express = require("express")

const app = express()

const { ProductModel } = require("../model/Product.model")

const productRouter = express.Router()

app.use(express.json())

productRouter.get("/", async (req, res) => {
    const query = req.query;
    const queryObj = {}
    if (query && query.price == "asc") {
        queryObj.product_price = 1
    } else if (query && query.price == "desc") {
        queryObj.product_price = -1
    }

    const data = await ProductModel.find({category:query.category}).sort(queryObj)
    res.send(data)
})

productRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    const data = await ProductModel.findById(id)
    res.send(data)
})


module.exports = productRouter
