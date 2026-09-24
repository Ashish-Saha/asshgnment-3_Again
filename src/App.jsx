import { useReducer, useState } from "react";
import "./App.css";
import { DataContext, SearchContext } from "./context/indexContext";
import { taskData } from "./data/data";
import Header from "./Header";
import TaskBoard from "./kanbanBoard/TaskBoard";
import { taskReducer } from "./reducer/taskReducer";
import Sidebar from "./Sidebar";

function App() {
  // const [dataArr, setDataArr] = useState(taskData);
  const [searchTerm, setSearchTerm] = useState("");
  const [dataArr, dispatch] = useReducer(taskReducer, taskData);

  return (
    <DataContext.Provider value={{ dataArr, dispatch }}>
      <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
        <div className="bg-gray-50 min-h-screen flex flex-col lg:flex-row">
          <Sidebar />
          <main className="flex-1 flex flex-col min-h-0">
            <Header />
            <TaskBoard />
          </main>
        </div>
      </SearchContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
