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
