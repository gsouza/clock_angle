const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require("./clock/routes/app.routes.js")(app);

const API_p = 3000;
app.listen(API_p, () => {
  console.log(`Server is running on port ${API_p}.`);
});