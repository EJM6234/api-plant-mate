'use strict';

const envVars   = require('./index');
const Sequelize = require('sequelize');
const env       = envVars.nodeEnv || 'development';
const config    = require('./config.js')[env];
let sequelize;


if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Plant = require('../models/Plant')(sequelize, Sequelize);
db.WaterSensor = require('../models/WaterSensor')(sequelize, Sequelize);

db.Plant.hasMany(db.WaterSensor, { foreignKey: 'plant_id'});
db.WaterSensor.belongsTo(db.Plant, { foreignKey: 'plant_id' });

module.exports = db;

