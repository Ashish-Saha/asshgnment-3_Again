import { useState } from "react";
import { filterSort } from "../tools/FilterSort";
import NotFound from "../tools/NotFound";
import Task from "./Task";
import TaskHeader from "./TaskHeader";

export default function DoneColumn({
  doneTaskData,
  onhandleOpenManu,
  openManu,
}) {
  const data = [...doneTaskData];

  const [filterItem, setFilterItem] = useState("All");
  const [sortItem, setSortItem] = useState("");

  const filterSortedData = filterSort(filterItem, sortItem, data);

  return (
    <>
      <div className="flex-1 flex flex-col min-w-0 w-full">
        <TaskHeader
          columnName="Done"
          onhandleOpenManu={onhandleOpenManu}
          openManu={openManu}
          taskCount={doneTaskData.length}
          setFilterItem={setFilterItem}
          setSortItem={setSortItem}
        />

        <div className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto">
          {/* <!-- Card  --> */}
          {filterSortedData.length === 0 ? (
            <NotFound />
          ) : (
            filterSortedData.map((item) => (
              <Task
                key={item.id}
                item={item}
                onhandleOpenManu={onhandleOpenManu}
                openManu={openManu}
                columnName="Done"
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
