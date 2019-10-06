var express = require('express');
var router = express.Router();

const path = require('path');

/* GET home page. */
router.get('/api*', function(req, res, next) {
  const toDist = path.join(__dirname, "/../../front/dist/index.html")
  console.log("toDist ",req)
  res.sendFile(path.join(__dirname, "/../../front/dist/"))
});

module.exports = router;
