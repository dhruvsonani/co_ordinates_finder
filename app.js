const express = require("express");
const getLocation = require("./controllers/locationController");

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.post("/get-location", getLocation);

app.listen(PORT, () => {
  console.log("Server started at port 5000");
});
