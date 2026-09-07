import Task from "./Task";
import TaskHeader from "./TaskHeader";

export default function TodoColumn({ todoTaskData, onhandleOpenManu , openManu }) {
  const todoData = [...todoTaskData];
  return (
    <>
      <div className="flex-1 flex flex-col min-w-0 w-full">
        <TaskHeader columnName="To-do" onhandleOpenManu={onhandleOpenManu} openManu={openManu} taskCount={todoTaskData.length}/>

        <div className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto">
          {/* <!-- Card 1 --> */}

          {todoData.map((item) => (
            
            <Task key={item.id} item={item} onhandleOpenManu={onhandleOpenManu} openManu={openManu} columnName="To-do"/>

          ))}
        </div>
      </div>
    </>
  );
}
