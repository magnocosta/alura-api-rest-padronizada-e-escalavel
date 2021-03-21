const { Sequelize } = require('sequelize');
const database = require('../../database');

const columns = {
    company: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.ENUM('ração', 'brinquedos'),
        allowNull: false
    }
}

const options = {
    freezeTableName: true,
    tableName: 'providers',
    timestamp: true,
    version: 'version'
};

module.exports = database.define('providers', columns, options);
