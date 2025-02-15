import { sequelize } from '../services/db-service';
import { DataTypes } from '@sequelize/core';

export const Employee = sequelize.define('Employee', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(10),
    },
  }, {
    tableName: 'employees',
    timestamps: false,
});