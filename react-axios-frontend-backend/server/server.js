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

app.post("/post", (request, response) => {
  const { userName, password, email, phoneNumber } = request.body;

  console.log({ userName, password, email, phoneNumber });

  return response.status(200).json({message : "Success"});
}); 

const PORT = 1000;
app.listen(PORT, () => {
  console.log("Server Running On Port: " + PORT);
});
