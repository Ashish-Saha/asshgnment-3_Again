export default function DeleteTaskModal({
  onDeleteTask,
  onCloseDeleteTask,
  task,
}) {
  // console.log(task);

  return (
    <section className=" fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/30 p-4">
      <div className="w-2xs mx-auto ">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <h2>Are You want to Delete?</h2>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row  sm:justify-end">
              <button
                onClick={() => {
                  onCloseDeleteTask();
                }}
                type="button"
                // href="./index.html"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => onDeleteTask(task)}
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
