
//This Function is implemented in TodoColumn But in Refactor & reuse issue ...
// its moved in separate file like utility function

const filterSort = (filtered, sorted, colData) => {
  let result;

  filtered === "All"
    ? (result = colData)
    : (result = colData.filter((item) => item.tag === filtered));

  sorted === "newest"
    ? (result = [...result].sort((a, b) => new Date(b.date) - new Date(a.date)))
    : (result = [...result].sort(
        (a, b) => new Date(a.date) - new Date(b.date),
      ));

  return result;
};

export { filterSort };
