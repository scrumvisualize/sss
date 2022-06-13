'use strict';
module.exports = (sequelize, DataTypes) => {
    const playerofmonth = sequelize.define('playerofmonth', {
        id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING(300),
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
        tableName: 'playerofmonth'
    });

    return playerofmonth;
};