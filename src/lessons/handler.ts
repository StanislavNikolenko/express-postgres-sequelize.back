import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Teacher } from '../models/teachers.model';
import { LessonTeacher } from '../models/lesson-teachers.model';
import { Lesson } from '../models/lessons.model';
// import { LessonModel, LessonTeacherModel, TeacherModel } from '../services/lessons.db';

export const getLessons = async (req: Request, res: Response) => {
  const { status, date, teacherIds } = req.query;

  let teachers;
  if(teacherIds && typeof teacherIds === 'string') {
    teachers = teacherIds.split(',');
  }
  console.log('teachers', teachers);

  let dateCondition;
  if (typeof date === 'string') {
    const dates = date.split(',');
    if (dates.length === 2) {
      dateCondition = {
        [Op.between]: [new Date(dates[0]), new Date(dates[1])]
      };
    } else {
      // If a single date is provided, use it directly
      dateCondition = new Date(dates[0]);
    }
  }

  const lessons = await Lesson.findAll({
    where: {
      ...(status && { status }),
      ...(dateCondition && { date: dateCondition }),
    }
  });
  res.json(lessons);


  // const lessonsTmp = await Lesson.findAll({
  //   include: [
  //     {
  //       model: Teacher,
  //       attributes: ['id', 'name'], // Select specific teacher fields
  //       where: {
  //         id: teacherIds, // Filter by specific teacher IDs
  //       },
  //       through: { attributes: [] }, // Exclude join table fields
  //     },
  //   ],
  // });
  
  const lessonsTmp = await Lesson.findAll({
    include: [
      {
        model: Teacher,
        as: 'teachers', // Matches alias
        where: { id: teacherIds },
        attributes: ['id', 'name'], // Fetch specific teacher attributes
        through: { attributes: [] }, // Exclude join table attributes
      },
    ],
  });
  console.log('lessonsTmp:', lessonsTmp);
};
