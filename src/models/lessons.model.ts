import { Model, DataTypes, Sequelize } from '@sequelize/core';

export class Lesson extends Model {
  public id!: number;
  public title!: string;
}

export const initLesson = (sequelize: Sequelize) => {
  Lesson.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'lessons',
    }
  );
};


// import { sequelize } from '../services/lessons.db';
// import { DataTypes } from '@sequelize/core';
// import { Student } from './students.model';
// import { LessonStudent } from './lesson-students.model';

// export const Lesson = (sequelize:any) => {
//   return sequelize.define('Lesson', {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     date: {
//       type: DataTypes.DATEONLY,
//       allowNull: false,
//     },
//     title: {
//       type: DataTypes.STRING(100),
//     },
//     status: {
//       type: DataTypes.INTEGER,
//       defaultValue: 0,
//     },
//   }, {
//     tableName: 'lessons',
//     timestamps: false,
//   });
// };

// export const Lesson = sequelize.define(
//   'Lessons',
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     date: {
//       type: DataTypes.DATEONLY,
//       allowNull: false,
//     },
//     title: {
//       type: DataTypes.STRING(100),
//     },
//     status: {
//       type: DataTypes.INTEGER,
//       defaultValue: 0,
//     },
//   },
//   {
//     tableName: 'lessons',
//     timestamps: false,
//   }
// );

