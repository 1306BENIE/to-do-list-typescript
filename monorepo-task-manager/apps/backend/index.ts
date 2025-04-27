// src/index.ts

import express from "express";
import cors from "cors";
import taskRoutes from "./routes/routesTasks";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// utiliser le routeur pour /tasks
app.use("/tasks", taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
