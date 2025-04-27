// src/routes/tasks.routes.ts

import { Router } from "express";
import { tasks, Task } from "../data/tasks";

const router = Router();

// GET toutes les tâches
router.get("/", (req, res) => {
  res.json(tasks);
});

// GET une tâche par ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const task = tasks.find((t) => t.id === parseInt(id));

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

// POST créer une nouvelle tâche
router.post("/", (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    res.status(400).json({ message: "Title and description are required" });
    return;
  }

  const newTask: Task = {
    id: Date.now(), // Simple génération d'id
    title,
    description,
    status: false, // par défaut la tâche n'est pas terminée
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT modifier une tâche existante
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  const task = tasks.find((t) => t.id === parseInt(id));
  if (task) {
    task.title = title ?? task.title;
    task.description = description ?? task.description;
    task.status = status ?? task.status;
    res.json(task);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

// DELETE supprimer une tâche
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex((task) => task.id === parseInt(id));

  if (index !== -1) {
    tasks.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

export default router;
