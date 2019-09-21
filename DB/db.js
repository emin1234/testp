const db = require('../Model/entity');


var insertCustomer = async (val,f)=>{
    db.Customers.create({
        name: val.name,
    }).then(row => {
        f();
    })
        .catch(err => {
            console.log(console.error);
            return console.log(err.message);
        })

}

var allCustomers = function(regFunction){

    db.Customers.findAll().then(rows => {
        var all = [];
        rows.forEach(function (row) {
            let customer = {
                id: row.dataValues.id,
                name: row.dataValues.name
            };
            all.push(customer);
        });
    })
}




module.exports = {
    insertCustomer,
    allCustomers
};
