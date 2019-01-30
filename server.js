const express = require("express");
const mongoose = require("mongoose");
const app = express();

//DB Config
const db = require("./config/keys").mongoURI;

//connect to mongodb through mongoose
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("hello makozi and mum  "));

const port = process.env.port || 5000;

app.listen(port, () => console.log("Server running at port  5000 ${post}"));
