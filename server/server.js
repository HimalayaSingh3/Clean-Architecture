const express = require("express");
const dotenv = require("dotenv");

const Db = require("./src/config/Db.Connect");
const app = require("./src/app");

dotenv.config();

Db();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
