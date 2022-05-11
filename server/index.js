
import express from 'express'
const port = 8000;
const app = express();

import Connection from './config/mongoose.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import Routes from './routes/routes.js';
import userRoutes from "./routes/userRoutes.js";
import { v4 as uuid } from 'uuid';
// import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

app.use(bodyParser.json({ extended: true }));
app.use(express.json()); // to accept json data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);
app.use("/api/users", userRoutes);

Connection(username, password);

// Error Handling middlewares
// app.use(notFound);
// app.use(errorHandler);

app.listen(port, function (err) {
    if (err) {
        console.log('error in running the server', error);

    }
    console.log('Server is running on port:', port);
});



// default data to database
DefaultData();


export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback'
paytmParams['EMAIL'] = 'kaustubhmogha10@gmail.com'
paytmParams['MOBILE_NO'] = '1234567852'