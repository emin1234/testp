var express = require('express');
var router = express.Router();
var custome = require('../DB/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  customer.allCustomers((all)=>{
    res.send(all);
  })

});

router.post('/', function(req, res, next) {

  var customer = {
    name: req.body.name,
  };
  customer.insertCustomer(customer,function(){
    res.send('inserted');
  });
});



module.exports = router;
