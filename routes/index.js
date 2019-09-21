var express = require('express');
var router = express.Router();
var customer = require('../DB/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //customer.allCustomers((all)=>{
    //res.send(all);
  //})

});

router.post('/', function(req, res, next) {

  var customer = {
    name: req.body.name,
  };
  customer.insertCustomer(customer,function(){
    //res.send('inserted');
    res.render('index', {message: "uspjesno ubaceno u bazu"});
  });
});



module.exports = router;
