const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "./");

const gfiFull = JSON.parse(fs.readFileSync(dirPath + "gfiDataJSON.json"));
const gfiData = gfiFull.content;
const cities = gfiData.map((i) => {
  return "<option>" + i.city + "</option>";
});
// console.log(cities);

module.exports = { gfiData };
