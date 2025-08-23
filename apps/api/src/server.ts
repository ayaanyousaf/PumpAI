import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/health", (_req: Request, res: Response) => res.json({ ok: true }));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`API running on port ${port}`));