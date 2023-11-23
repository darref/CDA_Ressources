import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/server/time', (req, res) => {
  const serverTime = new Date().toLocaleTimeString();
  res.json({ serverTime });
});

app.get('/hello/:name', (req, res) => {
  const { name } = req.params;
  res.json({ message: `Bienvenue, ${name} !` });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
