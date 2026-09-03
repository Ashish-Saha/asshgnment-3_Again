import { useState } from "react";
import { taskData } from "../data/data";
import DoneColumn from "./DoneColumn";
import ProgressColumn from "./ProgressColumn";
import TodoColumn from "./TodoColumn";

export default function TaskBoard() {
  // const [showItems, setShowItems] = useState({
  //   "To-do": false,
  //   "In Progress": false,
  //   Done: false,
  // });

  const [showItems, setShowItems] = useState(null);
  console.log(showItems);

  // const handleShowItems = (column) => {
  //   setShowItems((prev) => ({
  //     "To-do": false,
  //     "In Progress": false,
  //     Done: false,

  //     [column]: !prev[column],
  //   }));
  // };

  const handleShowItems = (column) => {
    setShowItems((prev) => (prev === column ? null : column));
  };

  return (
    <>
      <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
        <div className="flex flex-col gap-6 xl:flex-row h-full">
          <TodoColumn
            todoTaskData={taskData.todo}
            onhandleItemsShow={handleShowItems}
            showItems={showItems === "To-do"}
          />

          <ProgressColumn
            progressTaskData={taskData.progress}
            onhandleItemsShow={handleShowItems}
            showItems={showItems === "In Progress"}
          />

          <DoneColumn
            doneTaskData={taskData.done}
            onhandleItemsShow={handleShowItems}
            showItems={showItems === "Done"}
          />
        </div>
      </div>
    </>
  );
}
