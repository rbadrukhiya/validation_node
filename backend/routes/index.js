var express = require('express');
var router = express.Router();
var student = require('../models/student')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/adddata', async function(req, res, next) {

      try
        {
            // console.log(req.body);
            var data = await student.create(req.body)
            res.status(201).json({
              status:'success',
              data
            })
        }
        catch(err)
        {
            res.status(401).json({
              status:'err',
              err
            })

        }


});

module.exports = router;
