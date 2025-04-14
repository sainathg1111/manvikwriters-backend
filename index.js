const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

const app = express(); // app created before use
dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoutes")); // ✅ Register order routes


const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("🚀 Manvik Writers API is Live!");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

