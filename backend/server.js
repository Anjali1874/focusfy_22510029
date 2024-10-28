import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4001;

// Middleware
app.use(express.json());

// Routes
app.use("/user", userRoutes);

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT} and mongodb connected successfully`));
  })
  .catch((error) => console.log("Error connecting to MongoDB:", error));
