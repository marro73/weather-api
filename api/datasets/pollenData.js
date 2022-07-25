const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "./");

const pollenFull = JSON.parse(fs.readFileSync(dirPath + "pollenD.json"));
const pollenData = pollenFull.content;

module.exports = { pollenData };
