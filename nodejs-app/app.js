import express from 'express';
import cors from 'cors';

const app = express();

// Allow CORS (all origins). For stricter control, see the commented config below.
app.use(cors());
// Optional: handle preflight requests
app.options('*', cors());

// Example of a stricter config:
// app.use(cors({
//   origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
//   methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
//   allowedHeaders: ['Content-Type','Authorization'],
//   credentials: true
// }));

const hostname = '0.0.0.0';
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send(`<!DOCTYPE html>
<html>
  <head><title>Node.js App</title></head>
  <body><h1>Hello from Node.js on Kubernetes!</h1></body>
</html>`);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
