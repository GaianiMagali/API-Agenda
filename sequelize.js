const Sequelize = require('sequelize');

const personaModel = require('./modelos/persona');

const sequelize = new Sequelize('agenda', 'root', null, {
    host: 'localhost',
    dialect: 'mariadb'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const persona = personaModel(sequelize, Sequelize);

sequelize.sync()
    .then(() => {
        console.log('Tablas creadas')
    })

module.exports = {
    persona
}