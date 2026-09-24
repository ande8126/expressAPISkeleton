require("dotenv").config();

const express = require("express");
const exampleRoute = require("./routes/exampleRoute");

const app = express();

app.use(express.json());

app.use("/exampleRoute", exampleRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`namingConventionHere running on http://localhost:${port}`);
});