const express=require('express');
const cors= require('cors');
const bcrypt=require('bcrypt');
const authController = require('./routes/auth.route');
const connection = require('./configs/db');
const authentication = require('./middlewares/Authentication');
const bmiController = require('./routes/bmi.routes');
require('dotenv').config();

const app= express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());

app.get("/",(req,res)=>{
    console.log(req.session)
    return res.send("hello world")
})


app.use('/auth',authController);
app.use(authentication);
app.use('/user',bmiController)


const PORT = process.env.PORT || 8080
app.listen(PORT,async()=>{
    try {
        await connection
        console.log("connection success")
    }
    catch{
        console.log("feild connection")
    }
    console.log("Server strated on http://localhost:8080")
})
