const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/omar", (req, res, next) => {
  res.render("index");
});

router.get("/omar2", (req, res, next) => {
  res.render("index");
});

router.get("/omar3", (req, res, next) => {
  res.render("index");
});



module.exports = router;
