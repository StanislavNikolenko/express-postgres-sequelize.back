import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';
import { Lesson } from '../models/lessons.model';
import { Student } from '../models/students.model';
import { initTeacher, Teacher } from '../models/teachers.model';
import { LessonStudent } from '../models/lesson-students.model';
import { initLessonTeacher, LessonTeacher } from '../models/lesson-teachers.model';
import { initLesson } from '../models/lessons.model';
import { setupAssociations } from './setupAssociations';
require('dotenv').config();

export const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: 5432,
  ssl: false,
  clientMinMessages: 'notice',
});

// export const LessonModel = Lesson(sequelize);
// export const StudentModel = Student(sequelize);
// export const TeacherModel = Teacher(sequelize);
// export const LessonStudentModel = LessonStudent(sequelize);
// export const LessonTeacherModel = LessonTeacher(sequelize);

// LessonModel.belongsToMany(StudentModel, { through: LessonStudentModel });
// StudentModel.belongsToMany(LessonModel, { through: LessonStudentModel });
// LessonModel.belongsToMany(TeacherModel, { through: LessonTeacherModel, foreignKey: 'lessonId' });
// TeacherModel.belongsToMany(LessonModel, { through: LessonTeacherModel, foreignKey: 'teacherId'});

export const initializeModels = async () => {
  // Initialize models
  initLesson(sequelize);
  initTeacher(sequelize);
  initLessonTeacher(sequelize);

  // Setup associations
  // setupAssociations();

  // Sync database (create tables if they don't exist)
  // await sequelize.sync({ alter: true }); // Change to `{ force: true }` to reset tables
  console.log('Database synced successfully!');
};

export const connect = async () => {
  try {
    await initializeModels();
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
