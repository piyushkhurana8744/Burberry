const express=require("express")

const app=express.Router()

const jwt=require("jsonwebtoken")

const CartModel=require("../model/CartModel")

const authentication=require("../middleware/authenticate.middleware")

app.use(express.json())

app.use(authentication)

app.get("/",async(req,res)=>{
   const userId=req.body.userId 
   try{
    const data=await CartModel.find({userId:userId})
    res.send(data)
   }
   catch(err){
    res.send({msg:"data is not getting",err:err.message})
   }
   
})

app.post("/create",async(req,res)=>{
    try{
       const Cart=new CartModel(req.body)
       await Cart.save()
       res.send(Cart)
    }catch(err){
    res.send({msg:"Cart is not created",err:err.message})
    }
})

app.patch("/:id",async(req,res)=>{
    const payload=req.body
    const id=req.params.id
    const Cart=await CartModel.findOne({"_id":id})
    const CartuserId=Cart.userId
    const requserId=req.body.userId
    try{
       if(CartuserId!==requserId){
        res.send("you are not authorized")
       }
       else{
        const Cart=await CartModel.findByIdAndUpdate( { _id: id },
            { ...req.body },
            { new: true }
            )
        res.send(Cart)
       }
    }
    catch(err){
        res.send({msg:"Cart is not updated",err:err.message})  
    }
})
app.delete("/:id",async(req,res)=>{
    const id=req.params.id
    const requserId=req.body.userId
    const product=await CartModel.findOne({"_id":id})
    const userId=product.userId
    try{
       if(requserId!==userId){
        res.send({msg:"you are not authorized",err:err.message})
       }
       else{
        const product=await CartModel.findByIdAndDelete({"_id":id}, { new: true })
        res.send({msg:"product is deleted",product:product})
       }
    }
    catch{
        res.send({msg:"product is deleted",err:err.message}) 
    }
})

module.exports=app