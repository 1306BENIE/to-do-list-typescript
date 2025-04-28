import React from "react";
import { Task } from "../../types/task";
import { deleteTask } from "../../api/taskApi";

interface TaskItemProps {
  task: Task;
  onTaskDeleted: () => void;
}

const TaskItem = ({ task, onTaskDeleted }: TaskItemProps) => {
  const handleDelete = async () => {
    await deleteTask(task.id);
    onTaskDeleted();
  };

  return (
    <div className="border p-4 rounded-lg shadow-sm flex flex-col space-y-2">
      <h3 className="text-lg font-semibold">{task.title}</h3>
      <p className="text-gray-600">{task.description}</p>
      <span className="text-sm text-gray-500">Status: {task.status}</span>
      <button
        onClick={handleDelete}
        className="self-start mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
