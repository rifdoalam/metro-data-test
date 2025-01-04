"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Employee.hasMany(models.Education, {
        foreignKey: "employee_id", // Menghubungkan dengan kolom employee_id di tabel education
        as: "education", // Nama relasi yang digunakan saat query
      });
      Employee.hasOne(models.EmployeeProfile, {
        foreignKey: "employee_id",
        as: "profile",
      });
      Employee.hasMany(models.EmployeeFamily, {
        foreignKey: "employee_id",
        as: "family",
      });
    }
  }
  Employee.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nik: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      is_active: DataTypes.BOOLEAN,
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false,
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
      modelName: "Employee",
      tableName: "employee",
      timestamps: true, // Enable automatic created_at and updated_at
      createdAt: "created_at",
      updatedAt: "updated_at",
      underscored: true,
    }
  );
  return Employee;
};
