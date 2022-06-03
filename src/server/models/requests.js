/* jshint indent: 1 */
'use strict';
module.exports = (sequelize, DataTypes) => {
    const request = sequelize.define('request', {
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
        mobile: {
            type: DataTypes.STRING(50),

        },
        photo: {
            type: DataTypes.STRING(300),
        },
        code: {
            type: DataTypes.STRING(30),
		},
        status: {
            type: DataTypes.STRING(30)
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
        tableName: 'request'
    });

    return request;
};