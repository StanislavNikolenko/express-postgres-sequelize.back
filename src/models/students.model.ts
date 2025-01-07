import { sequelize } from '../services/lessons.db';
import { DataTypes } from '@sequelize/core';
import { Lesson } from './lessons.model';
import { LessonStudent } from './lesson-students.model';

export const Student = (sequelize:any) => {
  return sequelize.define('Student', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(10),
    },
  }, {
    tableName: 'students',
    timestamps: false,
  });
};

// export const Student = sequelize.define(
//   'Student',
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING(10),
//     },
//   },
//   {
//     tableName: 'students',
//     timestamps: false,
//   }
// );