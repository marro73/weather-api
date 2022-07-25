const { uviData } = require("../datasets/uviDataJSON");
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

module.exports = {
  getUVIByStation,
};
