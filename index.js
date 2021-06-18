require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./database");

const app = express();
const port = process.env.APP_PORT || 8080;

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", require("./config/routes"));

dbConnect
  .authenticate()
  .then(() => {
    console.log("\nDatabase succesfully connected...");
    app.listen(port, () => {
      console.log(`Server listeing on PORT:${port}`);
    });
  })
  .catch((err) => {
    console.log("Oops, something's wrong!");
    console.log(err);
  });
