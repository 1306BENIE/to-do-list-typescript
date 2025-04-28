import axios from "axios";
import { Task } from "../types/task";

const API_URL = "http://localhost:5000/tasks";

export const getTasks = async () => {
  const res = await axios.get<Task[]>(API_URL);
  return res.data;
};

export const createTask = async (task: Omit<Task, "id">) => {
  const res = await axios.post<Task>(API_URL, task);
  return res.data;
};

export const updateTask = async (id: number, task: Omit<Task, "id">) => {
  const res = await axios.put<Task>(`${API_URL}/${id}`, task);
  return res.data;
};

export const deleteTask = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};
