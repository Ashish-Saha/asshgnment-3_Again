import "./App.css";
import Header from "./Header";
import TaskBoard from "./kanbanBoard/TaskBoard";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col lg:flex-row">
      <Sidebar />
      <main className="flex-1 flex flex-col min-h-0">
        <Header />
        <TaskBoard/>
      </main>
    </div>
  );
}

export default App;
