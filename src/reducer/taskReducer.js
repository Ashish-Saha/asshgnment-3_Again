const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EDIT_TASK": {
      const taskitem = action.payload;
      const status = taskitem.status;

      const updatedData = { ...state };
      // Remove existing task from every column
      Object.keys(updatedData).forEach(
        (colName) =>
          (updatedData[colName] = updatedData[colName].filter(
            (item) => item.id !== taskitem.id,
          )),
      );

      updatedData[status] = [...updatedData[status], taskitem];

      return updatedData;
    }

    case "REMOVE_TASK": {
      const task = action.payload;

      return {
        ...state,
        [task.status]: state[task.status].filter((item) => item.id !== task.id),
      };
    }

    case "MOVE_TASK": {
      const { nextColumn, task } = action.payload;

      //As nextColumn gets like To-do but as per dataArr name is 'todo' so newColumnName is
      // to convert this naming confusion
      const newColumnName = {
        "To-do": "todo",
        "In Progress": "progress",
        Done: "done",
      };

      //Here next is in which column task should move
      const next = newColumnName[nextColumn];

      return {
        ...state,
        [next]: [...state[next], { ...task, status: next }],
        [task.status]: [
          ...state[task.status].filter((item) => item.id !== task.id),
        ],
      };
    }

    default: {
      console.warn(`Unknown Action : ${action.type} `);
      return state;
    }
  }
};

export { taskReducer };
