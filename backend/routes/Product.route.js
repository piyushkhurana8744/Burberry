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

    const filterObj = {}
    if (query.category) {
        filterObj.category = query.category
    }

    const data = await ProductModel.find(filterObj).sort(queryObj)
    res.send(data)
})

productRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    const data = await ProductModel.findById(id)
    res.send(data)
})

productRouter.post("/", async (req, res) => {
    const productData = req.body
    try {
        const newProduct = new ProductModel({ ...productData })
        await newProduct.save()
        res.send({ msg: "Product added Successfully" })
    } catch (error) {
        res.send(error)
    }

})

productRouter.patch("/:id", async (req, res) => {
    const id = req.params.id;
    const updates = req.body
    try {
        await ProductModel.findByIdAndUpdate(id, updates)
        res.send({ msg: "Product Updated Successfully" })
    } catch (error) {
        res.send({
            err: "Can't update Product",
            msg: error.message
        })
    }
})
productRouter.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await ProductModel.findByIdAndDelete(id)
        res.send({ msg: "Product Deleted Successfully" })
    } catch (error) {
        res.send({
            err: "Can't delete Product",
            msg: error.message
        })
    }
})


module.exports = productRouter
