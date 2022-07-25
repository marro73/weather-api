const pollenService = require("../services/pollenService");

const getPollenByStation = (req, res) => {
  let station = req.query.station;

  const getPBS = pollenService.getPollenByStation(station);
  res.send({
    status: "OK",
    data: getPBS,
  });
};

const getAllPollen = (req, res) => {
  const getAP = pollenService.getAllPollen();
  res.send({
    status: "OK",
    data: getAP,
  });
};
module.exports = {
  getPollenByStation,
  getAllPollen,
};
