import TaskHeader from "./TaskHeader";

export default function DoneColumn({ doneTaskData, onhandleItemsShow, showItems }) {
  const data = [...doneTaskData];

  return (
    <>
      <div className="flex-1 flex flex-col min-w-0 w-full">
        <TaskHeader columnName="Done"  onhandleItemsShow={onhandleItemsShow} showItems={showItems} />

        <div className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto">
          {/* <!-- Card 1 --> */}
          {data.map((item) => (
            <div
              className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow opacity-75 relative z-40"
              data-card="software-installation"
              data-column="done"
              key={item.id}
            >
              <div
                className="absolute top-4 right-4 text-gray-500"
                data-card-menu-container
              >
                <button
                  type="button"
                  className="p-1 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
                  data-card-menu-toggle="software-installation-menu"
                  aria-label="Open card menu"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3a1.25 1.25 0 110-2.5A1.25 1.25 0 018 3zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
                  </svg>
                </button>
                <div
                  className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 hidden z-40"
                  id="software-installation-menu"
                  data-card-menu
                >
                  <p className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Move to
                  </p>
                  <button
                    type="button"
                    className="w-full text-left px-4 py-2 hover:bg-gray-50"
                  >
                    To-do
                  </button>
                  <button
                    type="button"
                    className="w-full text-left px-4 py-2 hover:bg-gray-50"
                  >
                    In Progress
                  </button>
                  <div className="border-t border-gray-100 mt-2 pt-2 space-y-1">
                    <button
                      type="button"
                      className="w-full text-left px-4 py-2 hover:bg-gray-50"
                    >
                      Edit Card
                    </button>
                    <button
                      type="button"
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                    >
                      Delete Card
                    </button>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <h3 className="font-semibold text-gray-900 text-sm">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-gray-600 mb-4">{item.description}</p>
              <div className="flex items-center gap-2 mb-3">
                <span
                  style={{ color: item.tagColor }}
                  className="inline-block px-2.5 py-1 bg-green-50  text-xs font-medium rounded "
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
                {item.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
