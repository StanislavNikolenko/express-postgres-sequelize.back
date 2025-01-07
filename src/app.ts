import express from 'express';
import { lessonsRouter } from './routes/lessons';
import { connect } from './services/lessons.db';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

app.use('/lessons', lessonsRouter);
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await connect();
});
