const express = require("express");
const router = express.Router();
const db = require("../data/dbConfig");
//Get end point for all 'Read'

router.get("/", (req, res) => {
  db.select("*")
    .from("car")
    .then(cars => {
      res.status(200).json({ data: cars });
    })
    .catch(err => {
      res.status(500).json(errorRef(err));
    });
});

//Post 'Create'
router.post("/", validatPost, (req, res) => {
  const carData = req.body;
  db("cars")
    .insert(carData, "id")
    .into("cars")
    .then(ids => {
      res.status(200).json(ids);
    })
    .catch(err => {
      res.status(500).json(errorRef(err));
    });
});

//middleware for post
function validatPost(req, res, next) {
  const newCars = req.body;

  if (!newCars.vin || !newCars.make || !newCars.model || !newCars.mileage) {
    res
      .status(400)
      .json({ errorMessage: "VIN, MAKE, MODEL, MILEAGE is required" });
  } else next();
}
//error middle ware for console log
const errorRef = error => {
  const hash = Math.random()
    .toString(36)
    .substring(2);
  console.log(hash, error);
  return {
    message: `******************************\n\nUnknown Error, Ref: ${hash}\n\n******************************`,
    error
  };
};
module.exports = router;
