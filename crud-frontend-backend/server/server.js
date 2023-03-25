const express = require("express");
const app = express();

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200
};
app.use(cors(corsOptions));

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const { Sequelize } = require("sequelize");

// DataBase Credentials
const sequelize = new Sequelize(
  `mysql-crud`,
  "santhanakrishnan",
  "Askrrdc@#$sql1",
  {
    dialect: "mysql"
  }
);

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
connectToDatabase();

const crud_table_backend = sequelize.define("crud_table_backend", {
  userName: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
  phoneNumber: Sequelize.STRING
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening at the PORT: ${PORT}`);
});
