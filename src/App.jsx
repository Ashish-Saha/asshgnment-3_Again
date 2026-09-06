import { useState } from "react";
import "./App.css";
import { DataContext } from "./context/indexContext";
import { taskData } from "./data/data";
import Header from "./Header";
import TaskBoard from "./kanbanBoard/TaskBoard";
import Sidebar from "./Sidebar";

function App() {
  const [dataArr, setDataArr] = useState(taskData);

  return (
    <DataContext.Provider value={{ dataArr, setDataArr }}>
      <div className="bg-gray-50 min-h-screen flex flex-col lg:flex-row">
        <Sidebar />
        <main className="flex-1 flex flex-col min-h-0">
          <Header />
          <TaskBoard />
        </main>
      </div>
    </DataContext.Provider>
  );
}

export default App;
