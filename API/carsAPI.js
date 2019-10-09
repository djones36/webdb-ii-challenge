const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json("Successful Deployment of Cars API");
});

module.exports = router;
