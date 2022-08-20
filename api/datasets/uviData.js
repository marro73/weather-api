const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "./");
const uviFull = JSON.parse(fs.readFileSync(dirPath + "uviDataJSON.json"));
const uviData = uviFull.content;
module.exports = { uviData };
