const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors());

app.post("/submitdata/", (req, res) => {
  const data = req.body;
  console.log("Received Data: ", data);

  // Success Response => Frontend
  res.json({
    success_message: "Data submitted successfully!",
    data_submitted: data,
  });
});

app.listen(3000, () => {
  console.log("Super simple Express server is live on port 3000 🌎");
});
