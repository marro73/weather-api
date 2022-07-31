const { uviData } = require("../datasets/uviData");
const { capitalizer } = require("../utils/capitalizer");

//Messstation
const getUVIByStation = (station) => {
  let entry = capitalizer(station);

  var dis;
  if (
    uviData.some((i) => {
      if (i.city == entry) {
        return (dis = i);
      }
    })
  ) {
    return dis;
  } else {
    return "error";
  }
};
const getUVIAll = () => {
  return uviData;
};

module.exports = {
  getUVIByStation,
  getUVIAll,
};
