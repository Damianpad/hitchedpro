const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

// Routes
app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to hitched PRO");
});

mongoose
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log("Application connect to database");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on PORT ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
