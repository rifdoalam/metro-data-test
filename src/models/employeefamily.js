"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EmployeeFamily extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EmployeeFamily.belongsTo(models.Employee, {
        foreignKey: "employee_id",
        as: "employee",
      });
      // define association here
    }
  }
  EmployeeFamily.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "employee",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      identifier: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      job: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      place_of_birth: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      date_of_birth: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      religion: {
        type: DataTypes.ENUM("Islam", "Kristen", "Katolik", "Hindu", "Budha", "Konghucu"),
        allowNull: true,
      },
      is_life: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      is_divorced: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      relation_status: {
        type: DataTypes.ENUM("Suami", "Istri", "Anak", "Anak Sambung"),
      },
      created_by: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      updated_by: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "EmployeeFamily",
      tableName: "employee_family",
      underscored: true,
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return EmployeeFamily;
};
