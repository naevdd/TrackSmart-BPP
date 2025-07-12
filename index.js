const express = require("express");
const bodyParser = require("body-parser");
const trackRoute = require("./src/routes/track");
const supportRoute = require("./src/routes/support");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger.json");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use("/beckn/track", trackRoute);
app.use("/beckn/support", supportRoute);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Tracking BPP running on port ${PORT}`);
});