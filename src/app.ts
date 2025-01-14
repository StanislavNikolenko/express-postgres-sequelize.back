import express from 'express';
import { employeeRouter } from './routes/employee';
import * as bodyParser from 'body-parser';

export const app = express();
app.use(bodyParser.json());
app.use('/employee', employeeRouter);