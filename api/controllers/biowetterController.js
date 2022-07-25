const biowetterService = require("../services/biowetterService.js");

const getBioWetter = async (req, res) => {
  let city = req.query.city;

  try {
    const state = await biowetterService.getOrt(city);
    const region = biowetterService.getRr(state.data);
    var data = await biowetterService.getBW(region);
  } catch (err) {
    console.log(err);
  }

  res.send({
    status: "OK",
    data: data,
  });
};

module.exports = {
  getBioWetter,
};
