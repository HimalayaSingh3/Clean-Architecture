const express = require("express");
const cookieParser = require("cookie-parser");
const UserRoutes = require("./routes/User.Routes");
const NoteRoutes = require("./routes/Note.Routes");
const morgan = require("morgan");

const app = express();

app.use(express.json());

app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/v1/auth", UserRoutes);
app.use("/api/v1/note", NoteRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

module.exports = app;
