import { sequelize } from '../services/lessons.db';
import { DataTypes } from '@sequelize/core';
import { Lesson } from './lessons.model';
import { Student } from './students.model';

export const LessonStudent = (sequelize:any) => {
  return sequelize.define('LessonStudent', {
    lesson_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'lessons',
        key: 'id',
      },
    },
    student_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'students',
        key: 'id',
      },
    },
    visit: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    tableName: 'lesson_students',
    timestamps: false,
  });
};


// export const LessonStudent = sequelize.define(
//   'LessonStudent',
//   {
//     lesson_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: Lesson,
//         key: 'id',
//       },
//     },
//     student_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: Student,
//         key: 'id',
//       },
//     },
//     visit: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false,
//     },
//   },
//   {
//     tableName: 'lesson_students',
//     timestamps: false,
//   }
// );
