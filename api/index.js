const express = require("express");
const v1BiowetterRouter = require("./v1/routes/biowetterRoutes");
const v1OrtRouter = require("./v1/routes/ortRoutes");
const v1PollenRouter = require("./v1/routes/pollenRoutes");
const v1GFIRouter = require("./v1/routes/gfiRoutes");
const v1UVIRouter = require("./v1/routes/uviRoutes");

const app = express();
const PORT = process.env.PORT;
app.use("/api/v1/biowetter", v1BiowetterRouter);
app.use("/api/v1/pollen", v1PollenRouter);
app.use("/api/v1/gfi", v1GFIRouter);
app.use("/api/v1/uvi", v1UVIRouter);

app.use("/api/v1/ort", v1OrtRouter);

app.listen(PORT, () => {
  console.log(`APi is listening on port ${PORT}`);
});

module.exports = app;
