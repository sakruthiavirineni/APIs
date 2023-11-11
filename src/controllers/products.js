
import Product from '../models/productModel.js'

// const Product = require('../models/productModel')
export const getSample = (req,res)=>{
    res.send("Hello Everyone");
}

//get Products
export const getProducts = async(req,res) => {
    try {

        const products = await Product.find({});
        res.status(200).json(products);

    } 
    catch (error) {
        res.staus(500).json({message : error.message})
    }
}

//get Product By Id
export const getProductById = async(req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

//create a product
export const postProducts = async(req,res)=> {
    try {

        const product = await Product.create(req.body) 
        res.status(200).json(product);

    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message : error.message})
    }

}

//Update a particular product
export const updateProduct = async(req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body); 
        //if product is not found
        if(!product) {
            return res.status(404).json({message : `cannot find any product with ${id}`})
        }
        const updatedProduct = await Product.findById(id); 
        res.status(500).json(updatedProduct);
    }
    catch(error) {
        res.status(500).json({message : error.message})
    }
}

//delete a product
export const deleteProduct = async(req,res) => {
    try {
        const {id} = req.params; 
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message : `cannot find a product with ID ${id}`})
        }
        res.status(200).json(product);

    } catch(error) {
        res.status(500).json({message : error.message})
    }
}