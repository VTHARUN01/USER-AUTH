const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const UserRouter = require("./routes/User");
mongoose
  .connect("mongodb://localhost:27017/Instagram-oauth", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DataBase Connected"))
  .catch((err) => console.log(err));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../client/public")));
app.use("/user", UserRouter);
app.listen("8000", () => {
  console.log("Server Listerning At 8000");
});
