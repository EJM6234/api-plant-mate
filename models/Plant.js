module.exports = (sequelize, Sequelize) => {
  const Plant = sequelize.define('Plant', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    is_watered: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    auto_watering: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    }
  }, {
    tableName: 'plant',
    freezeTableName: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  });

  return Plant;
};
