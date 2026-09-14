import { useState } from "react";
import Task from "./Task";
import TaskHeader from "./TaskHeader";
import {filterSort} from '../tools/FilterSort.js'

export default function TodoColumn({
  todoTaskData,
  onhandleOpenManu,
  openManu,
}) {
  const todoData = [...todoTaskData];

  const [filterItem, setFilterItem] = useState("All");
  const [sortItem, setSortItem] = useState("");

  // const filterSort = () => {
  //   let result;

  //   filterItem === "All"
  //     ? (result = todoData)
  //     : (result = todoData.filter((item) => item.tag === filterItem));

  //   sortItem === "newest"
  //     ? (result = [...result].sort(
  //         (a, b) => new Date(b.date) - new Date(a.date),
  //       ))
  //     : (result = [...result].sort(
  //         (a, b) => new Date(a.date) - new Date(b.date),
  //       ));

  //   return result;
  // };

  
  const filterSortedData = filterSort(filterItem, sortItem, todoData)


  return (
    <>
      <div className="flex-1 flex flex-col min-w-0 w-full">
        <TaskHeader
          columnName="To-do"
          onhandleOpenManu={onhandleOpenManu}
          openManu={openManu}
          taskCount={todoTaskData.length}
          setFilterItem={setFilterItem}
          setSortItem={setSortItem}
        />

        <div className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto">
          {/* <!-- Card 1 --> */}

          {filterSortedData.map((item) => (
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
