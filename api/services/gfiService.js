const { gfiData } = require("../datasets/gfiData");
const { capitalizer } = require("../utils/capitalizer");

//Messstation
const getGFIByStation = (station) => {
  let entry = capitalizer(station);

  var dis;
  if (
    gfiData.some((i) => {
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

module.exports = {
  getGFIByStation,
};
