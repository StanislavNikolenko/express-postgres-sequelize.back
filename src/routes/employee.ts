import express from 'express';
import { createEmployee, getEmployeeById, updateEmployee } from '../employees/handler';

export const employeeRouter = express.Router();
employeeRouter.get('/:id', getEmployeeById);
employeeRouter.post('/', createEmployee);
employeeRouter.patch('/:id', updateEmployee);
