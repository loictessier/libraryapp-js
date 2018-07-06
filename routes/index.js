var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   require("../models/library.js").init(
     function(){
       require("../models/library.js").selectAll(function(documentsList){
         res.render('library', { title: 'LibrayApp', documentsList: documentsList});
       })
     }
  );

});

router.post('/', function(req, res, next){
  let name = req.body.name;
  let author = req.body.author;
  let year = req.body.year;
  let type = req.body.type;

  let documentsList = require("../models/library.js").init(
    function(){
      require("../models/library.js").insert(name, author, year, type)
    }
  );

  res.redirect("/");
})

module.exports = router;
