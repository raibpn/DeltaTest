const express = require("express");
require("dotenv").config(); //won't be pushing local/db credentials to git

const userRoutes = require("./routes/userRoutes");

const connectDB = require("./config/db");
connectDB();

const app = express();

app.use(express.json());
app.use('/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
