const axios = require("axios");

const { biowetter } = require("../datasets/biowetter");

const getOrt = async (ort) => {
  try {
    const res = await axios.get(
      `https://wetter-api.herokuapp.com/api/v1/ort/sbc?city=${ort}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const getRr = (ort) => {
  if (
    ort === "Schleswig-Holstein" ||
    ort === "Niedersachsen" ||
    ort === "Hamburg" ||
    ort === "Bremen"
  ) {
    return "A";
  } else if (ort === "Mecklenburg-Vorpommern") {
    return "B";
  } else if (ort === "Nordrhein-Westfalen") {
    return "C";
  } else if (
    ort === "Berlin" ||
    ort === "Brandenburg" ||
    ort === "Sachsen-Anhalt"
  ) {
    return "E";
  } else if (
    ort === "Hessen" ||
    ort === "Rheinland-Pfalz" ||
    ort === "Saarland"
  ) {
    return "F";
  } else if (ort === "Thüringen" || ort === "Sachsen") {
    return "G";
  } else if (ort === "Baden-Württemberg") {
    return "H";
  } else if (ort === "Bayern") {
    return "K";
  } else {
    return "error";
  }
};

const getBW = async (ort) => {
  let data;

  if (
    biowetter.zone.some((i) => {
      if (i.id === ort) {
        return (data = i.filter());
      }
    })
  ) {
    return data;
  } else {
    return "error";
  }
};

// Handeling the calls using promises

// getOrt("Bielefeld")
//   .then((d) => {
//     // console.log(d.data);
//     return getRr(d.data);
//   })
//   .then((d) => {
//     console.log(getBW(d));
//     return getBW(d);
//   });

async function doWork(ort) {
  try {
    const state = await getOrt(ort);
    const region = getRr(state.data);
    const data = await getBW(region);
  } catch (err) {
    console.log(err);
  }
}

module.exports = { doWork, getOrt, getRr, getBW };
