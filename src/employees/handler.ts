import { Request, Response } from 'express';

export const getEmployeeById = async (req: Request, res: Response) => {
  console.log('get employee by id');
  res.send('employee');
}

export const createEmployee = async (req: Request, res: Response) => {
  console.log('create employee');
  res.send('create employee');
}