import express from 'express';
import { createEmployee, getEmployeeById } from '../employees/handler';

export const employeeRouter = express.Router();
employeeRouter.get('/', getEmployeeById);
employeeRouter.post('/', createEmployee);
