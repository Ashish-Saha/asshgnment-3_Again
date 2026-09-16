import { useState } from "react";
import { getFormatDate } from "../tools/tagColor";
import TaskModal from "./TaskModal";

export default function Task({
  item,
  onhandleOpenManu,
  openManu,
  columnName,
  onTaskMove,
  onDeleteTask,
  onEditTask,
}) {
  const [showEditModal, setShowEditModal] = useState(false);

  const isTaskOpen =
    openManu.column === columnName && openManu.type === item.id;

  const moveToOptions = {
    "To-do": ["In Progress", "Done"],
    "In Progress": ["To-do", "Done"],
    Done: ["To-do", "In Progress"],
  };

  const handleEditShowModal = () => {
    setShowEditModal((prev) => !prev);
  };

  return (
    <>
      {showEditModal && <TaskModal onCloseShowModal={handleEditShowModal} task={item} isEdit= {true}/>}
      <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow relative">
        {/* Task Options Button*/}

        <div className="absolute top-4 right-4 text-gray-500">
          <button
            type="button"
            className="p-1 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
            onClick={() => onhandleOpenManu(columnName, item.id)}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 3a1.25 1.25 0 110-2.5A1.25 1.25 0 018 3zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
            </svg>
          </button>

          {/* Task options inside element of buton */}
          {isTaskOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2  z-40">
              <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Move to
              </p>

              {moveToOptions[columnName].map((option, index) => (
                <button
                  key={index}
                  type="button"
                  value={option}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50"
                  onClick={(e) => {
                    onTaskMove(e.target.value, item);
                  }}
                >
                  {option}
                </button>
              ))}

              <div className="border-t border-gray-100 mt-2 pt-2 space-y-1">
                <button
                  type="button"
                  className="w-full text-left px-4 py-2 hover:bg-gray-50"
                  onClick={() => {handleEditShowModal(); onhandleOpenManu(null,null)}}
                >
                  Edit Card
                </button>
                <button
                  type="button"
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                  onClick={() => onDeleteTask(item)}
                >
                  Delete Card
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mb-3">
          <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
        </div>
        <p className="text-xs text-gray-600 mb-4">{item.description}</p>
        <div className="flex items-center gap-2 mb-3">
          <span
            style={{ color: item.tagColor }}
            className="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded"
          >
            {item.tag}
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          {getFormatDate(item.date)}
        </div>
      </div>
    </>
  );
}
