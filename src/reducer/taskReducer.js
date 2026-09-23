const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK": {
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

    case "REMOVE_FROM_CART":
      return {};

    default:
      break;
  }
};

export { taskReducer };
