"use strict";
const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  class User extends Sequelize.Model {}
  User.init(
    {
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please provide a value for 'firstName'",
          },
          notEmpty: {
            msg: "'firstName' is required",
          },
        },
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please provide a value for 'lastName'",
          },
          notEmpty: {
            msg: "'lastName' is required",
          },
        },
      },
      emailAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please provide a value for 'email address'",
          },
          notEmpty: {
            msg: "'Email Address' is required",
          },
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please provide a value for 'password'",
          },
          notEmpty: {
            msg: "'Password' is required",
          },
        },
      },
    },
    { sequelize }
  );

  User.associate = (models) => {
    User.hasMany(models.Course, {
      as: "user",
      foreignKey: {
        fieldName: "userId",
        allowNull: false,
      },
    });
  };

  return User;
};
