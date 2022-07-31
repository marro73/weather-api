const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "./");

const biowetter = JSON.parse(fs.readFileSync(dirPath + "biowetterJSON.json"));

module.exports = { biowetter };
