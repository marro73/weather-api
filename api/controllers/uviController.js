const uviService = require("../services/uviService");

const getUVIByStation = (req, res) => {
  let station = req.query.station;

  const getUBS = uviService.getUVIByStation(station);
  res.send({
    status: "OK",
    data: getUBS,
  });
};

const getUVIAll = (req, res) => {
  const getAll = uviService.getUVIAll();
  res.send({
    status: "OK",
    data: getAll,
  });
};
module.exports = {
  getUVIByStation,
  getUVIAll,
};
