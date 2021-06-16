const Joi = require('joi');
// Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
require("dotenv").config(); //won't be pushing local/db credentials to git
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const proposalRouter = require('./routes/')

const connectDB = require("./config/db");
connectDB();

const auth = require('./auth/auth');
const config = require('config');
const userController = require('./controller/userController');

const app = express();

app.use(express.json());
app.use('/users', userRoutes )
// app.use("/admin", adminRoutes);
app.use('/api/auth', auth);
app.use('/Proposals', proposalRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
