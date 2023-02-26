const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    product_img: { type: String, required: true },
    product_title: { type: String, required: true },
    product_price: { type: String, required: true },
    product_category: { type: String, required: true },
    quantity: { type: String, required: true },
    category: { type: String, required: true },
    delivered: { type: Boolean, default: false },
    productId: { type: String, required: true },
    userId: { type: String, required: true },

})

const OrderModel = mongoose.model("orders", orderSchema)

module.exports = {
    OrderModel
}