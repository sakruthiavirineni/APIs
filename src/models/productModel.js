import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required: [true, "Please enter the product name"]
        },
        quantity: {
            type : Number, 
            required: true,
            default: 0
        }, 
        price: {
            type: Number, 
            required: true,
        }
    }, 
    {
        timestamps : true
    }
)

const Product = mongoose.model('Product', productSchema);
export default Product;


