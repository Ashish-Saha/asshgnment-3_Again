import { useContext, useState } from "react";

import { DataContext } from "../context/indexContext";
import DoneColumn from "./DoneColumn";
import ProgressColumn from "./ProgressColumn";
import TodoColumn from "./TodoColumn";

export default function TaskBoard() {
  const [openManu, setOpenManu] = useState({
    column: null,
    type: null,
  });

  const { dataArr, setDataArr } = useContext(DataContext);

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
            todoTaskData={dataArr.todo}
            onhandleOpenManu={handleOpenManu}
            openManu={openManu}
          />

          <ProgressColumn
            progressTaskData={dataArr.progress}
            onhandleOpenManu={handleOpenManu}
            openManu={openManu}
          />

          <DoneColumn
            doneTaskData={dataArr.done}
            onhandleOpenManu={handleOpenManu}
            openManu={openManu}
          />
        </div>
      </div>
    </>
  );
}
