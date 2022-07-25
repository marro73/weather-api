const { ortData } = require("../datasets/ortData");
const { capitalizer } = require("../utils/capitalizer");

//Get the state name by the city name
const getStateByCity = (city) => {
  let entry = capitalizer(city);

  var state;
  if (
    ortData.some((i) => {
      if (i.ort === entry) {
        return (state = i.bundesland);
      }
    })
  ) {
    return state;
  } else {
    return "error";
  }
};

//Get the district name by the city name
// not all cities have districts

const getDisByCity = (city) => {
  let entry = capitalizer(city);
  var dis;
  if (
    ortData.some((i) => {
      if (i.ort === entry) {
        return (dis = i.landkreis);
      }
    })
  ) {
    return dis;
  } else {
    return "error";
  }
};

//Get the district name by the Postal code
// not all postal codes have districts

const getDisByPlz = (plz) => {
  var dis;
  if (
    ortData.some((i) => {
      if (i.plz == plz) {
        return (dis = i.landkreis);
      }
    })
  ) {
    return dis;
  } else {
    return "error";
  }
};

//Get the State name by the Postal code
const getStateByPlz = (plz) => {
  var dis;
  if (
    ortData.some((i) => {
      if (i.plz == plz) {
        return (dis = i.bundesland);
      }
    })
  ) {
    return dis;
  } else {
    return "error";
  }
};

module.exports = {
  getStateByCity,
  getDisByCity,
  getDisByPlz,
  getStateByPlz,
};
