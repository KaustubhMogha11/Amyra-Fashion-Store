  
import express from  'express';
import { getProducts, getProductById} from '../controller/product-controller.js';


import { addPaymentGateway, paymentResponse } from '../controller/paytm-controller.js';

const router = express.Router();



router.get('/products', getProducts);
router.get('/product/:id', getProductById);
router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);
export default router;