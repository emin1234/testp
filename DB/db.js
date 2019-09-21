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


module.exports = {
    insertCustomer
};
