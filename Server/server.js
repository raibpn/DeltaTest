const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
require("dotenv").config(); //won't be pushing local/db credentials to git
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
connectDB();

const auth = require('./routes/auth');
const config = require('config');

if (!config.get('PrivateKey'){
    console.error('Error : Private Key not found.');
    process.exit(1);
})

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes )
app.use("/admin", adminRoutes);
app.use('/api/auth', auth);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
