const mongoose = require("mongoose");

const Db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = Db;
