import React, { useState } from "react";
import { TaskForm, TaskList } from "./components";

function App() {
  const [refresh, setRefresh] = useState(false);

  const refreshTasks = () => setRefresh(!refresh);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">
          Gestionnaire de Tâches
        </h1>
        <TaskForm onTaskCreated={refreshTasks} />
        <TaskList refreshTrigger={refresh} onTaskDeleted={refreshTasks} />
      </div>
    </div>
  );
}

export default App;
