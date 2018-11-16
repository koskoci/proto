var express = require('express');
var models = require('../models');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.User.findAll().then(projects => res.json(projects))
});

module.exports = router;
