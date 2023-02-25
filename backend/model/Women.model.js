const mongoose = require('mongoose')

const womenSchema = mongoose.Schema({
    product_img:{type:String,required: true},
    product_title:{type:String,required: true},
    product_price:{type:String,required: true},
    product_category:{type:String,required: true},
    quantity:{type:String,required: true},
    category:{type:String,required: true}
})

const WomenModel = mongoose.model("women",WomenSchema)

module.exports = {
    WomenModel
}