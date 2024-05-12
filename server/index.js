import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

import clientRoutes from "./Routes/client.js";
import generalRoutes from "./Routes/general.js";
import managementRoutes from "./Routes/management.js";
import salesRoutes from "./Routes/sales.js";

// Data import
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from './models/ProductStat.js';
import Transaction from './models/Transaction.js';

import { dataUser, dataProduct, dataProductStat, dataTransaction, dataOverallStat, dataAffiliateStat  } from './data/index.js';
import OverallStat from './models/OverallStat.js';
import AffiliateStat from './models/AffiliateStat.js';

dotenv.config();
const app = express();

// Middleware
app.use(helmet());
app.use(morgan('combined')); // Specify a format for logging
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use('/client', clientRoutes);
app.use('/general', generalRoutes); // Fixed a typo in the route path
app.use('/management', managementRoutes);
app.use('/sale', salesRoutes);
// console.log(process.env.MONGO_URL);
// MongoDB connection
const PORT = process.env.PORT || 5001;
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log(`Connected to MongoDB`);
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
      // User.insertMany(dataUser);
      // Product.insertMany(dataProduct);  
      // ProductStat.insertMany(dataProductStat);
      // Transaction.insertMany(dataTransaction);
      // OverallStat.insertMany(dataOverallStat);
      // AffiliateStat.insertMany(dataAffiliateStat)
      
    });
  })
  .catch((err) => {
    console.error(`MongoDB connection error: ${err}`);
  });