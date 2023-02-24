const express = require('express')

const {WomenModel} = require("../model/Women.model")

const womenRouter = express.Router()

womenRouter.use(express.json())

// -----------------------------------------------------------------------

// -------------------------------GET DATA--------------------------------

womenRouter.get("/",async(req,res)=>{
    try {
        const getData = await WomenModel.find()
        res.send({"msg":"Login Successful","data":getData})
    } catch (error) {
        console.log("Error from fetching Data",error)
    }
})



// --------------------------------POST WOMEN DATA--------------------------

womenRouter.post("/create",async(req,res)=>{
    const data = req.body;
    try {
        const postData = new WomenModel(data);
        await postData.save()
        res.send("Women Data Added")
    } catch (error) {
        res.send(error)
    }
})


//---------------------------------UPDATE WOMEN DATA--------------------------

womenRouter.patch("/update/:productID", async(req,res)=>{
    const productID  = req.params.productID;
    const userID = req.body.userID;
    const data = req.body
    try{
        const app = await WomenModel.findOne({userID:productID})
        if(productID !== app.userID){
            console.log("Invalid ID")
            res.send("not valid id")
        }
        else{
           await WomenModel.findByIdAndUpdate({_id:app._id},data);
           res.send("Data updated")
        }
    }
    catch(err){
        res.send(err)
    }
})


// ------------------------------DELETE WOMEN DATA---------------------


womenRouter.delete("/delete/:productID", async(req,res)=>{
    const productID  = req.params.productID;
    const userID = req.body.userID;
    try{
        const app = await WomenModel.findOne({userID:productID})
        if(productID !== app.userID){
            res.send("not valid id")
        }
        else{
           await WomenModel.findByIdAndDelete({_id:app._id});
           res.send("Data deleted")
        }
    }
    catch(err){
        res.send(err)
    }
        
})