const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'ncs0105',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;