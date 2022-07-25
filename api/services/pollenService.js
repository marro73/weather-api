const { pollenData } = require("../datasets/pollenData");

//Messstation
const getPollenByStation = (station) => {
  var dis;
  if (
    pollenData.some((i) => {
      // console.log(i.partregion_id);
      if (i.partregion_id == station) {
        // console.log(i);

        return (dis = i);
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
  getPollenByStation,
  getAllPollen,
};
