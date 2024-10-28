import express from "express";
import { signup, login } from "../controllers/userController.js";

const router = express.Router();

// In your backend route handler
router.post("/signup", async (req, res) => {
    try {
      const { fullname, email, password } = req.body;
      const newUser = new User({ fullname, email, password });
      const savedUser = await newUser.save();
      res.status(201).json({ user: savedUser });
    } catch (error) {
      console.error("Error saving user to DB:", error);
      res.status(400).json({ message: error.message });
    }
  });
  
router.post("/login", login);

export default router;
