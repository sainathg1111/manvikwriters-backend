const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  res.status(200).json({ message: "User registered!" });
});

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User logged in!" });
});

module.exports = {
  registerUser,
  loginUser,
};

