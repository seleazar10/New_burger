var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.

var burger = require("../models/burger.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.all(function(burgInf) {
    res.render("index", { burger_data: burgInf });
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    //redirect to /burgers
    console.log(result);
    res.redirect("/");
  });
});


router.put("/burgers/:id", function(req, res) {
  
    burger.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});

module.exports = router;
