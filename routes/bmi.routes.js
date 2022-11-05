const {Router}= require('express');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');
require('dotenv').config();

const BmiModel= require('../models/Bmi.model');

const bmiController=Router();

bmiController.get('/',async(req,res)=>{

    try{      
        const bmilists= await BmiModel.find({authId:req.body.authId})
        res.send(bmilists)
    }
    catch(er){
        res.status(500).json({error:er.message})
    }
    
})

bmiController.post('/create',async(req,res)=>{
   const {height,weight,authId}= req.body;
    const bmi=weight/(height**2);
   const newbmi= new BmiModel({
    height,
    weight,
    bmi,
    authId

   })
   try{
    await newbmi.save();
    res.send('bmilist created')
   }
   catch(err){
    res.status(500).json({ error: err.message });
   }
})


module.exports=bmiController;
