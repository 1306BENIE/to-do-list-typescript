import React, { useEffect, useState } from "react";
import { getTasks } from "../../api/taskApi";
import { Task } from "../../types/task";
import { TaskItem } from "../TaskItem";

interface TaskListProps {
  refreshTrigger: boolean;
  onTaskDeleted: () => void;
}

const TaskList = ({ refreshTrigger, onTaskDeleted }: TaskListProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };
    fetchTasks();
  }, [refreshTrigger]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Liste Des tâches</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500">Aucune tâche disponible.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onTaskDeleted={onTaskDeleted} />
        ))
      )}
    </div>
  );
};

export default TaskList;
