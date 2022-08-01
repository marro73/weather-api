const express = require("express");
const v1BiowetterRouter = require("./api/v1/routes/biowetterRoutes");
const v1OrtRouter = require("./api/v1/routes/ortRoutes");
const v1PollenRouter = require("./api/v1/routes/pollenRoutes");
const v1GFIRouter = require("./api/v1/routes/gfiRoutes");
const v1UVIRouter = require("./api/v1/routes/uviRoutes");
const download = require("./download");
var cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
app.use("/api/v1/biowetter", v1BiowetterRouter);
app.use("/api/v1/pollen", v1PollenRouter);
app.use("/api/v1/gfi", v1GFIRouter);
app.use("/api/v1/uvi", v1UVIRouter);
download.downloadAll();
app.use("/api/v1/ort", v1OrtRouter);
app.use(
  cors({
    origin: "*",
  })
);
app.listen(PORT, () => {
  console.log(`APi is listening on port ${PORT}`);
});

module.exports = app;
