var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  require("../models/library.js").init();
  let documentsList = require("../models/library.js").selectAll();
  res.render('index', { title: 'LibrayApp', documentsList: documentsList });
});

router.post('/', function(req, res, next){
  require("../models/library.js").init();
  let name = req.body.name;
  let author = req.body.author;
  let year = req.body.year;
  let type = req.body.type;

  require("../models/library.js").insert(name, author, year, type);
  res.redirect("/");
})

module.exports = router;
