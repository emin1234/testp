const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite:data');

const Customers = sequelize.define('customer',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,

    },
    name:{
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    }
});

const createTable = function() {

    sequelize.sync({ logging: console.log, force: true }).then(fullfil => {
        sequelize
            .authenticate().then(() => {
            console.log('Connection has been established successfully.');
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    });
};


module.exports.createTable = createTable;
module.exports.sequelize = sequelize;
module.exports.Sequelize = Sequelize;
module.exports.Customers = Customers;