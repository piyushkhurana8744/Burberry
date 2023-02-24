const express=require("express")

const app=express.Router()



const UserModel=require("../model/Usermodel")

const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');

app.use(express.json())
app.get("/",async(req,res)=>{
    const data=await UserModel.find()
    res.send(data)
})

app.post("/register",async(req,res)=>{
    try{
        const {username,email,password}=req.body
        bcrypt.hash(password, saltRounds, async(err, hash)=> {
            if(err){
                res.send({msg:"user is not created"})
            }
            else{
                const user= new UserModel({username:username,email:email,password:hash})
                await user.save()
                res.send("signup successfull")
            }
        });
    }
    catch(err){
        res.send({msg:"user is not registerd",err:err.msg})
    }
})

app.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const user=await UserModel.findOne({email})
        bcrypt.compare(password, user.password, async(err, result)=> {
            if(result){
             const token = jwt.sign({ userId: user._id }, 'login');
             res.send({msg:"user is login successfully",token:token,name:user.username})
            }
            else{
             res.send("invalid credentials")
            }
         })
        
    }
    catch(err){

    }
})

module.exports=app