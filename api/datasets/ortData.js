const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "./");

const ortData = JSON.parse(fs.readFileSync(dirPath + "ortDataJSON.json"));

// console.log(ortData[1].ort);

module.exports = { ortData };
