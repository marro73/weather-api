const pollenService = require("../services/pollenService");

const getPollenByRegion = (req, res) => {
  let region = req.query.region;

  const getPBR = pollenService.getPollenByRegion(region);
  res.send({
    status: "OK",
    data: getPBR,
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
  getPollenByRegion,
  getAllPollen,
};
