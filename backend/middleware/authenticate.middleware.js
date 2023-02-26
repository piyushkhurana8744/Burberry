const jwt=require("jsonwebtoken")

const authentication=(req,res,next)=>{
    const token=req.headers.authorization
    jwt.verify(token, 'login', (err, decoded) =>{
        if(decoded){
            const userId=decoded.userId
            req.body.userId=userId
            next()
        }
        else{
            res.send("invalid token")
        }
      });
}

module.exports=authentication