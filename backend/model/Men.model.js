const mongoose = require('mongoose')

const menSchema = mongoose.Schema({
    product_img:{type:String,required: true},
    product_title:{type:String,required: true},
    product_price:{type:String,required: true},
    product_category:{type:String,required: true},
    quantity:{type:String,required: true}
})

const menModel = mongoose.model("men",menSchema)

module.exports = {
    menModel
}