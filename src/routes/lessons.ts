import express from 'express';
import { getLessons } from '../lessons/handler';

export const lessonsRouter = express.Router();
lessonsRouter.get('/', getLessons);
