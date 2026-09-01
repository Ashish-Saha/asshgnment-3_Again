import DoneColumn from "./DoneColumn";
import ProgressColumn from "./ProgressColumn";
import TodoColumn from "./TodoColumn";

export default function TaskBoard() {
  return (
    <>
      <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
        <div className="flex flex-col gap-6 xl:flex-row h-full">
          <TodoColumn />

          <ProgressColumn />

          <DoneColumn />
        </div>
      </div>
    </>
  );
}
