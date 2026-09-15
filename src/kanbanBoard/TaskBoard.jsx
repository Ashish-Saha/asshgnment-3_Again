import { useContext, useState } from "react";

import { DataContext, SearchContext } from "../context/indexContext";
import DoneColumn from "./DoneColumn";
import ProgressColumn from "./ProgressColumn";
import TodoColumn from "./TodoColumn";

export default function TaskBoard() {
  const [openManu, setOpenManu] = useState({
    column: null,
    type: null,
  });

  const { dataArr, setDataArr } = useContext(DataContext);
  const { searchTerm } = useContext(SearchContext);

  const handleOpenManu = (column, type) => {
    setOpenManu((prev) =>
      prev.column === column && prev.type === type
        ? { column: null, type: null }
        : { column, type },
    );
  };

  const searchDataArr = (task) => {
    const searchText = searchTerm.toLowerCase();
    return task.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText) ||
        item.tag.toLowerCase().includes(searchText)
      );
    });
  };

  console.log(dataArr)
  
  const taskMove = (nextColumn, task) => {
    const newColumnName = {
      "To-do": "todo",
      "In Progress": "progress",
      Done: "done",
    };

    const next = newColumnName[nextColumn];

    setDataArr({
      ...dataArr,
      [next]: [...dataArr[next], task],
    });
  };

  return (
    <>
      <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
        <div className="flex flex-col gap-6 xl:flex-row h-full">
          <TodoColumn
            todoTaskData={searchDataArr(dataArr.todo)}
            onhandleOpenManu={handleOpenManu}
            openManu={openManu}
            onTaskMove={taskMove}
          />

          <ProgressColumn
            progressTaskData={searchDataArr(dataArr.progress)}
            onhandleOpenManu={handleOpenManu}
            openManu={openManu}
            onTaskMove={taskMove}
          />

          <DoneColumn
            doneTaskData={searchDataArr(dataArr.done)}
            onhandleOpenManu={handleOpenManu}
            openManu={openManu}
            onTaskMove={taskMove}
          />
        </div>
      </div>
    </>
  );
}
