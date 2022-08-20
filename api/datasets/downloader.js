const cron = require("node-cron");
const express = require("express");
const app = express();
const https = require("https");
const fs = require("fs");
const biowetter =
  "https://opendata.dwd.de/climate_environment/health/alerts/biowetter.json";
const gefahrenindex =
  "https://opendata.dwd.de/climate_environment/health/alerts/gt.json";
const Pollenflug =
  "https://opendata.dwd.de/climate_environment/health/alerts/s31fg.json";
const UVI =
  "https://opendata.dwd.de/climate_environment/health/alerts/uvi.json";

const download = function (url, name) {
  https.get(url, (res) => {
    const writeStream = fs.createWriteStream(`api/datasets/${name}`);
    res.pipe(writeStream);
    writeStream.on("finish", () => {
      writeStream.close();
      console.log("download completed");
    });
  });
};

const downloadAll = () => {
  cron.schedule("5 8 * * *", () => {
    download(gefahrenindex, "gfiDataJSON.json");
  });
  cron.schedule("5 11 * * *", () => {
    download(biowetter, "biowetterJSON.json");
  });
  cron.schedule("5 11 * * *", () => {
    download(Pollenflug, "pollenD.json");
  });
  cron.schedule("5 8 * * *", () => {
    download(UVI, "uviDataJSON.json");
  });
};

module.exports = { downloadAll };
