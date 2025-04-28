// src/index.ts

import express from "express";
import cors from "cors";
import taskRoutes from "./routes/routesTasks";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// utiliser le routeur pour /tasks
app.use("/tasks", taskRoutes);

app.listen(port, () => {
  console.log(`Le sserver a bien démaré sur le port http://localhost:${port}`);
});
