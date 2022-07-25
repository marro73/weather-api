const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "./");

const biowetter = JSON.parse(fs.readFileSync(dirPath + "biowetterJSON.json"));

//console.log(biowetter.zone[0].dayafter_to_afternoon.effect[0]);

module.exports = { biowetter };
