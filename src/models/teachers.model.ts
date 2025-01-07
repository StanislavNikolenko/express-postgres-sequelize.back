
import { Model, DataTypes, Sequelize } from '@sequelize/core';

export class Teacher extends Model {
  public id!: number;
  public name!: string;
}

export const initTeacher = (sequelize: Sequelize) => {
  Teacher.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'teachers',
    }
  );
};

// import { sequelize } from '../services/lessons.db';
// import { DataTypes } from '@sequelize/core';
// import { Lesson } from './lessons.model';
// import { LessonTeacher } from './lesson-teachers.model';

// export const Teacher = (sequelize:any) => {
//   return sequelize.define('Teacher', {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING(10),
//     },
//   }, {
//     tableName: 'teachers',
//     timestamps: false,
//   });
// };

// export const Teacher = sequelize.define(
//   'Teacher',
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
//     tableName: 'teachers',
//     timestamps: false,
//   }
// );