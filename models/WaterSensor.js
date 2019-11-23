module.exports = (sequelize, Sequelize) => {
    const WaterSensor = sequelize.define('WaterSensor', {
        number: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
        },
        plantId: {
            field: 'plant_id',
            type: Sequelize.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 'water_sensor',
        freezeTableName: true,
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    });

    return WaterSensor;
};
