import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/dbConnection";

import authRoutes from "./routes/AuthRoutes";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

connectDB();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// Mount routes
app.use("/api/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("PumpAI server is running!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
