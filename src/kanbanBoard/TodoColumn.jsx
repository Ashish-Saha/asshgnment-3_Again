import { useState } from "react";
import Task from "./Task";
import TaskHeader from "./TaskHeader";

export default function TodoColumn({
  todoTaskData,
  onhandleOpenManu,
  openManu,
}) {
  const [filterItem, setFilterItem] = useState("All");
  const todoData = [...todoTaskData];

  // const closeFilterOption =
  //   openManu.column === "check" && openManu.type === "filter";

  const filterSort =
    filterItem === "All"
      ? todoData
      : todoData.filter((item) => item.tag === filterItem);

  return (
    <>
      <div className="flex-1 flex flex-col min-w-0 w-full">
        <TaskHeader
          columnName="To-do"
          onhandleOpenManu={onhandleOpenManu}
          openManu={openManu}
          taskCount={todoTaskData.length}
          onFilterSort={filterSort}
          filterItem={filterItem}
          setFilterItem={setFilterItem}
        />

        <div className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto">
          {/* <!-- Card 1 --> */}

          {filterSort.map((item) => (
            <Task
              key={item.id}
              item={item}
              onhandleOpenManu={onhandleOpenManu}
              openManu={openManu}
              columnName="To-do"
            />
          ))}
        </div>
      </div>
    </>
  );
}
