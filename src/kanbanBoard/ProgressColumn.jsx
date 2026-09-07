import Task from "./Task";
import TaskHeader from "./TaskHeader";

export default function ProgressColumn({ progressTaskData, onhandleOpenManu , openManu}) {
  const progressData = [...progressTaskData];
  return (
    <>
      <div className="flex-1 flex flex-col min-w-0 w-full">
        <TaskHeader columnName="In Progress"  onhandleOpenManu={onhandleOpenManu} openManu={openManu} taskCount={progressTaskData.length}/>

        <div className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto">
          {/* <!-- Card 1 --> */}
          {progressData.map((item) => (
            <Task key={item.id} item={item} onhandleOpenManu={onhandleOpenManu} openManu={openManu} columnName="In Progress"/>
          ))}
        </div>
      </div>
    </>
  );
}
