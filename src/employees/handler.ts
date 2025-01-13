import { Request, Response } from 'express';
import { Employee } from '../models/employee'

/***
 * This handler has examples for CRUD operations:
 * - CREATE - create a new employee entity.
 * - READ   - get employee entity by id.
 * - UPDATE - update employee entity.
 * - DELETE - delete employee entity.
 * ***/

export const getEmployeeById = async (req: Request, res: Response) => {
  console.log('get employee by id');
  res.send('employee');
}

// Create.
export const createEmployee = async (req: Request, res: Response) => {
  const userName = req.body.name;
  const employee = await Employee.create({ name: userName });
  res.send(employee).status(201);
}