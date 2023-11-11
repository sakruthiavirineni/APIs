import express from 'express';
import mongoose from 'mongoose';

import products from './routes/products.js'
// both are same
// const express = require('express')
// const mongoose = require('mongoose')

const app = express();

const PORT = 3000; 

app.use(express.json())

//routes 

app.use('/',products) 

app.listen(PORT, ()=> console.log(`Server is running on port: http://localhost:${PORT}`))

mongoose.connect('mongodb+srv://sakruthi:sakruthi@nodeapi.fuui3ho.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('connected to mongoDB')
}).catch(()=>{
    console.log(error)
})
