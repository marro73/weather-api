// This script is for parsing the CSV file of the ORT api into JSON

// Node packages for file system
var fs = require("fs");
var path = require("path");

var filePath = path.join(__dirname, "zuordnung_plz_ort.csv");
// Read CSV
var csv = fs.readFileSync(filePath, { encoding: "utf-8" }, function (err) {
  console.log(err);
});

const toJSON = (csv) => {
  const lines = csv.split("\n");
  const result = [];
  const headers = lines[0].split(",");

  lines.map((l) => {
    const obj = {};
    const line = l.split(",");

    headers.map((h, i) => {
      obj[h] = line[i];
    });

    result.push(obj);
  });

  return JSON.stringify(result);
};

// const csv = `osm_id,ags,ort,plz,landkreis,bundesland
// 1104550,08335001,Aach,78267,Landkreis Konstanz,Baden-Württemberg
// 1255910,07235001,Aach,54298,Landkreis Trier-Saarburg,Rheinland-Pfalz
// 62564,05334002,Aachen,52062,Städteregion Aachen,Nordrhein-Westfalen
// 62564,05334002,Aachen,52064,Städteregion Aachen,Nordrhein-Westfalen
// 62564,05334002,Aachen,52066,Städteregion Aachen,Nordrhein-Westfalen
// 62564,05334002,Aachen,52068,Städteregion Aachen,Nordrhein-Westfalen`;

const data = toJSON(csv);

// console.log(data);

fs.writeFile("ort.json", data, (err) => {
  if (err) {
    throw err;
  }
  console.log("JSON data is saved.");
});
