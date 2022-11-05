const jwt = require('jsonwebtoken');
require('dotenv').config();

const authentication=(req,res,next)=>{
    if(!req.headers.authorization){
        return res.send('Please login again')
    }
    const token=req.headers.authorization.split(' ')[1];
    jwt.verify(token,'secret',function(err,decoded){
        if(err){
         res.send('Please login again')
        }
        else{
            req.body.authId=decoded.authId;
            next();
        }
        console.log(decoded);
        // req.body.email=decoded.email;
        // req.body.name=decoded.name;
        
    })
}


module.exports= authentication;