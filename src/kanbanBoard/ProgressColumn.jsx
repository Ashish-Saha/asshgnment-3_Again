import { useState } from "react";
import { filterSort } from "../tools/FilterSort";
import NotFound from "../tools/NotFound";
import Task from "./Task";
import TaskHeader from "./TaskHeader";

export default function ProgressColumn({
  progressTaskData,
  onhandleOpenManu,
  openManu,
  onTaskMove,
  onDeleteTask
}) {
  const progressData = [...progressTaskData];

  const [filterItem, setFilterItem] = useState("All");
  const [sortItem, setSortItem] = useState("clear");

  const filterSortedData = filterSort(filterItem, sortItem, progressData);

  return (
    <>
      <div className="flex-1 flex flex-col min-w-0 w-full">
        <TaskHeader
          columnName="In Progress"
          onhandleOpenManu={onhandleOpenManu}
          openManu={openManu}
          taskCount={progressTaskData.length}
          filterItem={filterItem}
          setFilterItem={setFilterItem}
          sortItem={sortItem}
          setSortItem={setSortItem}
        />

        <div className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto">
          {/* <!-- Card --> */}
          {filterSortedData.length === 0 ? (
            <NotFound />
          ) : (
            filterSortedData.map((item) => (
              <Task
                key={item.id}
                item={item}
                onhandleOpenManu={onhandleOpenManu}
                openManu={openManu}
                columnName="In Progress"
                onTaskMove={onTaskMove}
                onDeleteTask={onDeleteTask}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
