// function getTagColor(tagName) {
//   switch (tagName) {
//     case "design":
//       return "#30D18E";

//     case "operations":
//       return "#DE300D";

//     case "marketing":
//       return "#3BBAC4";

//     case "creative":
//       return "#36A351";

//     case "development":
//       return "#A3367D";

//     case "backend":
//       return "#CCC266";

//     case "setup":
//       return "#82A118";

//     case "infrastructure":
//       return "#A1188A";

//     case "documentation":
//       return "#078A4C";

//     default:
//       return "#000000";
//   }
// }

// export { getTagColor };

const tagColors = {
  design: "#30D18E",
  operations: "#DE300D",
  marketing: "#3BBAC4",
  creative: "#36A351",
  development: "#A3367D",
  backend: "#CCC266",
  setup: "#82A118",
  infrastructure: "#A1188A",
  documentation: "#078A4C",
};

function getTagColor(name) {
  return tagColors[name] || "#000";
}

export { getTagColor };
