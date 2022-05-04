
import mongoose from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';

const productSchema = new mongoose.Schema({
    id: String,
    imgOne: String,
    imgTwo: String,
    imgThree: String,
    imgFour: String,
   tags:String,
   type:String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    stock: Boolean,
    size: String,
    categoryName:String
});

// autoIncrement.initialize(mongoose.connection);
// productSchema.plugin(autoIncrement.plugin, 'product');

const products = mongoose.model('product', productSchema);

export default products;