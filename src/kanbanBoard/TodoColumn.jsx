import { useState } from "react";
import { filterSort } from "../tools/FilterSort.js";
import NotFound from "../tools/NotFound.jsx";
import Task from "./Task";
import TaskHeader from "./TaskHeader";

export default function TodoColumn({
  todoTaskData,
  onhandleOpenManu,
  openManu,
  onTaskMove,
  onDeleteTask
}) {
  const todoData = [...todoTaskData];

  const [filterItem, setFilterItem] = useState("All");
  const [sortItem, setSortItem] = useState("clear");

  const filterSortedData = filterSort(filterItem, sortItem, todoData);

  return (
    <>
      <div className="flex-1 flex flex-col min-w-0 w-full">
        <TaskHeader
          columnName="To-do"
          onhandleOpenManu={onhandleOpenManu}
          openManu={openManu}
          taskCount={todoTaskData.length}
          filterItem={filterItem}
          setFilterItem={setFilterItem}
          sortItem={sortItem}
          setSortItem={setSortItem}
        />

        <div className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto">
          {/* <!-- Card 1 --> */}

          {filterSortedData.length === 0 ? (
            <NotFound />
          ) : (
            filterSortedData.map((item) => (
              <Task
                key={item.id}
                item={item}
                onhandleOpenManu={onhandleOpenManu}
                openManu={openManu}
                columnName="To-do"
                onTaskMove = {onTaskMove}
                onDeleteTask={onDeleteTask}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
