const uviService = require("../services/uviService");

const getUVIByStation = (req, res) => {
  let station = req.query.station;

  const getUBS = uviService.getUVIByStation(station);
  res.send({
    status: "OK",
    data: getUBS,
  });
};

module.exports = {
  getUVIByStation,
};
