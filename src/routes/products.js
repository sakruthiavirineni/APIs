import express from 'express';
import { getSample } from '../controllers/products.js';
import { postProducts } from '../controllers/products.js';
import { getProducts } from '../controllers/products.js';
import { getProductById } from '../controllers/products.js';
import { updateProduct } from '../controllers/products.js';
import {deleteProduct} from '../controllers/products.js'
const router = express.Router();

router.get('/',getSample)

//retrieving product details
router.get('/product', getProducts)

//creating a product
router.post('/product', postProducts )

//retrieving product by Id
router.get('/product/:id', getProductById)

//Updating product based on Id
router.put('/product/:id', updateProduct)

//Deleting a particular product
router.delete('/product/:id', deleteProduct)

export default router;

