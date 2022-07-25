const ortService = require("../services/ortService");

const getStateByCity = (req, res, next) => {
  let city = req.query.city;
  const getSBC = ortService.getStateByCity(city);
  res.send({
    status: "OK",
    data: getSBC,
  });
  next();
};
const getDisByCity = (req, res, next) => {
  let city = req.query.city;
  const getDBC = ortService.getDisByCity(city);
  res.send({
    status: "OK",
    data: getDBC,
  });
  next();
};

const getDisByPlz = (req, res) => {
  let plz = req.query.plz;

  const getDBP = ortService.getDisByPlz(plz);
  res.send({
    status: "OK",
    data: getDBP,
  });
};
const getStateByPlz = (req, res) => {
  let plz = req.query.plz;

  const getSBP = ortService.getStateByPlz(plz);
  res.send({
    status: "OK",
    data: getSBP,
  });
};
module.exports = {
  getStateByCity,
  getDisByCity,
  getDisByPlz,
  getStateByPlz,
};
