const { sequelize } = require("../config/sequelize");

module.exports = async () => {
  try {
    console.log('Syncing database...');
    // await sequelize.sync();
  } catch (err) {
    console.error('Error loading database', err);
  }
};
