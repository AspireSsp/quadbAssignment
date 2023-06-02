const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const Data = require("./model/data");
const connectDB = require("./config/db.js");
connectDB();

dotenv.config({
  path: "./config/confi.env",
});

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
console.log(path.join(__dirname, "/public"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());

app.get("/", async (req, res) => {
  const result = await Data.find();
  res.render("home", { result: result });
});

app.post("/addData", async (req, res) => {
  try {
    const result = await Data.create(req.body);
    res.send(result);
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`server running: ${process.env.PORT}`);
});
