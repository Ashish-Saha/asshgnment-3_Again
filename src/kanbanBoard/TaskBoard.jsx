import { useState } from "react";
import { taskData } from "../data/data";
import DoneColumn from "./DoneColumn";
import ProgressColumn from "./ProgressColumn";
import TodoColumn from "./TodoColumn";

export default function TaskBoard() {
  const [openManu, setOpenManu] = useState({
    column: null,
    type: null,
  });
  console.log(openManu);

  const handleOpenManu = (column, type) => {
    setOpenManu((prev) =>
      prev.column === column && prev.type === type
        ? { column: null, type: null }
        : { column, type },
    );
  };

  return (
    <>
      <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
        <div className="flex flex-col gap-6 xl:flex-row h-full">
          <TodoColumn
            todoTaskData={taskData.todo}
            onhandleOpenManu={handleOpenManu}
            openManu={openManu}
          />

          <ProgressColumn
            progressTaskData={taskData.progress}
            onhandleOpenManu={handleOpenManu}
            openManu={openManu}
          />

          <DoneColumn
            doneTaskData={taskData.done}
            onhandleOpenManu={handleOpenManu}
            openManu={openManu}
          />
        </div>
      </div>
    </>
  );
}
