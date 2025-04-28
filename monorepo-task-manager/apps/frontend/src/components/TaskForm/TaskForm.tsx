import React, { useState } from "react";
import { createTask } from "../../api/taskApi";
import { Task } from "../../types/task";

interface TaskFormProps {
  onTaskCreated: () => void;
}

const TaskForm = ({ onTaskCreated }: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"pending" | "in-progress" | "completed">(
    "pending"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createTask({ title, description, status });
    setTitle("");
    setDescription("");
    setStatus("pending");
    onTaskCreated();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-2xl font-bold">Ajouter une nouvelle tâche</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full border border-slate-500 rounded px-3 py-2"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="w-full border border-slate-500 rounded px-3 py-2 outline-none"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as any)}
        className="w-full border rounded px-3 py-2"
      >
        <option value="pending">En attente</option>
        <option value="in-progress">En cours</option>
        <option value="completed">Complété</option>
      </select>
      <button
        type="submit"
        className="bg-green-600/75 text-white px-4 py-2 rounded hover:bg-green-500/75"
      >
        Créer une tâche
      </button>
    </form>
  );
};

export default TaskForm;
