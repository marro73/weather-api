const { pollenData } = require("../datasets/pollenData");

//regions
const getPollenByRegion = (region) => {
  var dis = [];
  if (
    pollenData.map((i) => {
      // console.log(i.partregion_id);
      if (i.region_id == region) {
        // console.log(i);
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
