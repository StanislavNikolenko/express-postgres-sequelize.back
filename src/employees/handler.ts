import { Request, Response } from 'express';
import { Employee } from '../models/employee'

/***
 * This handler has examples for CRUD operations:
 * - CREATE - create a new employee entity.
 * - READ   - get employee entity by id.
 * - UPDATE - update employee entity.
 * - DELETE - delete employee entity.
 * ***/

// Create.
export const createEmployee = async (req: Request, res: Response) => {
  const userName = req.body.name;
  const employee = await Employee.create({ name: userName });
  res.send(employee).status(201);
}

// Read.
export const getEmployeeById = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const employee = await Employee.findAll({
    where: {
      id: userId,
    },
  });
  res.send(employee).status(200);
}

// Update.
export const updateEmployee = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const userName = req.body.name;
  const employee = await Employee.update(
    { name: userName },
    {
      where: {
        id: userId,
      },
    },
  );
  res.send(employee).status(200);
}

// Delete.
export const removeEmployee = async (req: Request, res: Response) => {
  const userId = req.params.id;
  await Employee.destroy({
    where: {
      id: userId,
    },
  });
  res.sendStatus(200);
}