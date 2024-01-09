"use strict";
const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  class Course extends Sequelize.Model {}
  Course.init(
    {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please provide a value for 'title'",
          },
          notEmpty: {
            msg: "'Title' is required",
          },
        },
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please provide a value for 'description'",
          },
          notEmpty: {
            msg: "'Description' is required",
          },
        },
      },
      estimatedTime: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      materialsNeeded: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    { sequelize }
  );

  Course.associate = (models) => {
    Course.belongsTo(models.User, {
      as: "user",
      foreignKey: {
        fieldName: "userId",
      },
    });
  };

  return Course;
};
