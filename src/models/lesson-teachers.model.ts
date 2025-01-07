import { Model, DataTypes, Sequelize } from '@sequelize/core';
//import { LessonModel, TeacherModel } from '../services/lessons.db';
import { Lesson } from './lessons.model';
import { Teacher } from './teachers.model';
export class LessonTeacher extends Model {
  public lessonId!: number;
  public teacherId!: number;
}

export const initLessonTeacher = (sequelize: Sequelize) => {
  LessonTeacher.init(
    {
      lessonId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Lesson, // Matches table name
          key: 'id',
        },
      },
      teacherId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Teacher, // Matches table name
          key: 'id',
        },
      },
    },
    {
      sequelize,
      tableName: 'lesson_teachers',
      timestamps: false, // No timestamps for join table
    }
  );
};
// import { sequelize, TeacherModel } from '../services/lessons.db';
// import { DataTypes } from '@sequelize/core';
// import { Lesson } from './lessons.model';
// import { Teacher } from './teachers.model';
// import { LessonModel } from '../services/lessons.db';

// export const LessonTeacher = (sequelize:any) => {
//   return sequelize.define('LessonTeacher', {
//     lessonId: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: LessonModel,
//         key: 'id',
//       },
//     },
//     teacherId: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: TeacherModel,
//         key: 'id',
//       },
//     },
//   }, {
//     tableName: 'lesson_teachers',
//     timestamps: false,
//   });
// };


// export const LessonTeacher = sequelize.define(
//   'LessonTeacher',
//   {
//     lesson_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: Lesson,
//         key: 'id',
//       },
//     },
//     teacher_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: Teacher,
//         key: 'id',
//       },
//     },
//   },
//   {
//     tableName: 'lesson_teachers',
//     timestamps: false,
//   }
// );


// export const LessonTeacher = (sequelize) => {
//   return sequelize.define('LessonTeacher', {
//     lesson_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'lessons',
//         key: 'id',
//       },
//     },
//     teacher_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'teachers',
//         key: 'id',
//       },
//     },
//   }, {
//     tableName: 'lesson_teachers',
//     timestamps: false,
//   });
// };
