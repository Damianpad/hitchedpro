const express = require("express");
const app = express();
require("dotenv").config();

// Routes
app.get("/", (req, res) => {
    console.log(req);
    return res.status(234).send("Welcome to hitched PRO");
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT ${process.env.PORT}`);
});
