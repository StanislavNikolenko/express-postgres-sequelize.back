import http from 'http';
import { app } from './app';
import { connect } from './services/db-service';

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(PORT, async() => {
  await connect();
  console.log(`Server is running on http://localhost:${PORT}`);
});