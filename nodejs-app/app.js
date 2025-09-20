import express from 'express';
const app = express();

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
