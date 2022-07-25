const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "./");

const gfiFull = JSON.parse(fs.readFileSync(dirPath + "gfiDataJSON.json"));
const gfiData = gfiFull.content;
// console.log(gfiData);
module.exports = { gfiData };
