var express = require('express');
var router = express.Router();

/* Post home page. */
router.post('/', function(req, res, next) {
    const input = req.body.string;
    const len = input.length;
    res.render("postmalone", {string: input, length: len});
});

module.exports = router;