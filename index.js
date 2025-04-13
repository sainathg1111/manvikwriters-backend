const express = require("exress");
const cors = require("cors");
app.use(cors());

const connectDB = require("./config/db");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));
const PORT = process.env.PORT || 5001;
app.get("/", (req, res) => {
  res.send("🚀 Manvik Writers API is Live!");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
