const mongoose = require('mongoose')

const CartSchema = mongoose.Schema({
    product_img:{type:String,required: true},
    product_title:{type:String,required: true},
    product_price:{type:String,required: true},
    product_category:{type:String,required: true},
    quantity:{type:String,required: true},
    category:{type:String,required: true},
    delivered:{type:Boolean,default:false},
    userId:{type:String,required:true}
})

const CartModel = mongoose.model("cart",CartSchema)

module.exports =  CartModel