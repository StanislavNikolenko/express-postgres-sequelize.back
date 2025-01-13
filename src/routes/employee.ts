import express from 'express';
import { createEmployee, getEmployeeById } from '../employees/handler';

export const employeeRouter = express.Router();
employeeRouter.get('/:id', getEmployeeById);
employeeRouter.post('/', createEmployee);
