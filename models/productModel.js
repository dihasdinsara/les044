import mongoose, {Schema} from "mongoose";


const productSchema = new Schema({
    id: Number,
    name: String,
    price: String,
    href: String,
    imageSrc: String,

});

const Product = mongoose.models.Product || mongoose.model("Product",productSchema);

export default Product;