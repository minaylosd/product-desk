const replace = require("replace-in-file");
const options = {
  files: "./out/_next/static/css/*.css",
  from: ["/fonts/Monitorica-Bd.ttf"],
  to: ["../../../fonts/Monitorica-Bd.ttf"],
};
(async function () {
  try {
    const results = await replace(options);
    console.log("Replacement results:", results);
  } catch (error) {
    console.error("Error occurred:", error);
  }
})();
