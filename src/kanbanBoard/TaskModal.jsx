import { useContext, useState } from "react";
import { DataContext } from "../context/indexContext";
import { getTagColor } from "../tools/tagColor";
import { validationForm } from "../tools/validationForm";

export default function TaskModal({ onCloseShowModal, task, isEdit }) {
  const { setDataArr } = useContext(DataContext);
  const [error, setErrors] = useState({});

  const [formData, setFormData] = useState(
    task || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tag: "",
      tagColor: "",
      date: "",
      status: "todo",
    },
  );

  const handleFormData = (item, event) => {
    const value = event.target.value;
    setFormData((prev) => ({
      ...prev,
      [item]: value,
      ...(item === "tag" && { tagColor: getTagColor(value) }),
    }));
  };

  //Below fun is for ADD or Update/Edit Task
  const handleAddTask = (taskItem) => {
    const validation = validationForm(formData, setErrors);

    if (!validation) return;

    let status = taskItem.status;

    setDataArr((prev) => {
      const updatedData = { ...prev };
      //Remove clicked item from whole database first
      Object.keys(updatedData).forEach((element) => {
        updatedData[element] = updatedData[element].filter(
          (item) => item.id !== taskItem.id,
        );
      });

      //Add or update task because taskItem means formData
      updatedData[status] = [...updatedData[status], taskItem];

      return updatedData;
    });

    return true;
  };

  return (
    <>
      <div className=" fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm p-4">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8 flex flex-col items-center">
          <div className="mb-8 flex items-center justify-between text-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mt-8">
                {isEdit ? "Edit Task" : "Add Task"}
              </h1>
              <p className="text-sm text-gray-500">
                Create a card for your board.
              </p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const success = handleAddTask(formData);
              if (success) {
                onCloseShowModal();
              }
            }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Task Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="e.g. Wireframes"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                  value={formData.title}
                  onChange={(e) => handleFormData("title", e)}
                />
                <p className="text-red-600 font-bold text-[14px] mt-2">
                  {error.title}
                </p>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Task Subtitle / Description
                </label>
                <input
                  id="description"
                  name="description"
                  placeholder="Add context or acceptance criteria"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                  value={formData.description}
                  onChange={(e) => handleFormData("description", e)}
                />
                <p className="text-red-600 font-bold text-[14px] mt-2">
                  {error.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="tag"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tag
                </label>
                <select
                  id="tag"
                  name="tag"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                  value={formData.tag}
                  onChange={(e) => handleFormData("tag", e)}
                >
                  <option value="Design">Select Tag</option>
                  <option value="Design">Design</option>
                  <option value="Operations">Operations</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Creative">Creative</option>
                  <option value="Development">Development</option>
                  <option value="Backend">Backend</option>
                  <option value="Setup">Setup</option>
                  <option value="Infrastructure">Infrastructure</option>
                  <option value="Documentation">Documentation</option>
                </select>
                <p className="text-red-600 font-bold text-[14px] mt-2">
                  {error.tag}
                </p>
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Due Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                  value={formData.date}
                  onChange={(e) => handleFormData("date", e)}
                />
                <p className="text-red-600 font-bold text-[14px] mt-2">
                  {error.date}
                </p>
              </div>

              <div>
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700"
                >
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                  value={formData.status}
                  onChange={(e) => handleFormData("status", e)}
                >
                  <option value="todo">To-do</option>
                  <option value="progress">In Progress</option>
                  <option value="done">Done</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <a
                href="./index.html"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={(e) => {
                  e.preventDefault();
                  onCloseShowModal();
                }}
              >
                Cancel
              </a>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
              >
                {isEdit ? "Update Task" : "Add Task"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
