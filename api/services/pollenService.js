const { pollenData } = require("../datasets/pollenData");

//regions
const getPollenByRegion = (region) => {
  var dis = [];
  if (
    pollenData.map((i) => {
      if (i.region_id == region) {
        dis.push(i);
        return dis;
      }
    })
  ) {
    return dis;
  } else {
    return "error";
  }
};
const getAllPollen = () => {
  return pollenData;
};
module.exports = {
  getPollenByRegion,
  getAllPollen,
};
