import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/productsModel.js';
import { products } from './products.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(async () => {
        console.log("🌱 Connected for seeding");

        await Product.deleteMany({});
        await Product.insertMany(products);

        console.log("✅ Data Seeded");
        process.exit();
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });