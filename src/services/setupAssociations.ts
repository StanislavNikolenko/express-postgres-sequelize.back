import { Teacher } from '../models/teachers.model';
import { Lesson } from '../models/lessons.model';
import { LessonTeacher } from '../models/lesson-teachers.model';

export const setupAssociations = () => {
  // Many-to-Many relationship between Lesson and Teacher via LessonTeacher
  Lesson.belongsToMany(Teacher, {
    through: LessonTeacher,
    foreignKey: 'lessonId',
    as: 'teachers', // Alias
  });

  Teacher.belongsToMany(Lesson, {
    through: LessonTeacher,
    foreignKey: 'teacherId',
    as: 'lessons', // Alias
  });
};
