/* jshint indent: 1 */
'use strict';
module.exports = (sequelize, DataTypes) => {
    const announcement = sequelize.define('announcement', {
        id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false

        },
        news: {
            type: DataTypes.STRING(250),
        },
		createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    }, {
        timestamps: true,
        tableName: 'announcement'
    });

    return announcement;
};