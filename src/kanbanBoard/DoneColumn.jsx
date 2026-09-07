import Task from "./Task";
import TaskHeader from "./TaskHeader";

export default function DoneColumn({
  doneTaskData,
  onhandleOpenManu,
  openManu,
}) {
  const data = [...doneTaskData];

  return (
    <>
      <div className="flex-1 flex flex-col min-w-0 w-full">
        <TaskHeader
          columnName="Done"
          onhandleOpenManu={onhandleOpenManu}
          openManu={openManu}
          taskCount={doneTaskData.length}
        />

        <div className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto">
          {/* <!-- Card 1 --> */}
          {data.map((item) => (
            <Task key={item.id} item={item} onhandleOpenManu={onhandleOpenManu} openManu={openManu} columnName="Done"/>
          ))}
        </div>
      </div>
    </>
  );
}
