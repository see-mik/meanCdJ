var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

    res.json({
        userName: 'Miko',
        massage: 'Massage from ..',
        created: Date
    },
    {
        userName: 'Less',
        massage: 'Massage from second ..',
        created: Date
    });
});

module.exports = router;