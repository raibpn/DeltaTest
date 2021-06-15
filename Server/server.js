require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes )

// app.get("/", (req, res) => {
//   res.json({ message: "API running..." });
// });

// app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
