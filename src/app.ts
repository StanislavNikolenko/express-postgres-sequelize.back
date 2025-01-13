import express from 'express';
import { lessonsRouter } from './routes/lessons';
import { employeeRouter } from './routes/employee';
import { connect } from './services/lessons.db';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

// app.use('/lessons', lessonsRouter);
app.use('/employee', employeeRouter);

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await connect();
});
