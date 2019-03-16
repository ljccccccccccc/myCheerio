var express = require('express');
var router = express.Router();

function action (req,res,next){
  res.send('Welcome to Express index!');
}

router.get('/', action);

module.exports = router;
