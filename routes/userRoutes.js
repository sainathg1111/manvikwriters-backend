const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  changePassword,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/auth");

// your existing routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/change-password", changePassword);

// ✅ add this protected route
router.get("/me", authMiddleware, (req, res) => {
  res.json(req.user); // user info from token
});

module.exports = router;