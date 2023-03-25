const express = require("express");
const app = express();

const cors = require("cors");
const corsOption = {
  origin: "http://localhost:3000",
  Credential: "true",
  optionSuccessStatus: 200
};
app.use(cors(corsOption));

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// database create
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  `mysql-crud`,
  "santhanakrishnan",
  "Askrrdc@#$sql1",
  {
    dialect: "mysql"
  }
);

// checking db working r not
const dbCheck = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
dbCheck();

// Creating table
const table_name = sequelize.define("crud_table", {
  userName: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
  phoneNumber: Sequelize.STRING
});

// Checking table
 (async () => {
    await sequelize.sync();
    console.log("Table created successfully");
  })();

// port
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`port running on : ${PORT}`);
});
