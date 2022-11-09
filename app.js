const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const url = "mongodb://localhost:27017/AlienDBex";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const alienRouter = require("./routes/aliens");
app.use("/aliens", alienRouter);

app.listen(9000, () => {
  console.log("Server started");
});
