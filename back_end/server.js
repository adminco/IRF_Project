// Library imports
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const excel = require("exceljs");
const nodeoutlook = require("nodejs-nodemailer-outlook");

// Directory imports
const businessLogic = require("./businessLogic");

const PORT = 5000;
const app = express();

// Enabling CORS
app.use(cors());

// enabling body-parser(you mnust use this library in order to access the body of a request)
app.use(bodyParser.json());

// defining the post request and attaching Middleware to route
app.post("/form", businessLogic.excelMiddleware);

app.listen(PORT, () => console.log("Express is connected"));
