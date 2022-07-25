const gfiService = require("../services/gfiService");

const getGFIByStation = (req, res) => {
  let station = req.query.station;

  const getGBS = gfiService.getGFIByStation(station);
  res.send({
    status: "OK",
    data: getGBS,
  });
};

module.exports = {
  getGFIByStation,
};
