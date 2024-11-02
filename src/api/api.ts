import express from 'express';
import 'dotenv/config';

const app = express();
const PORT = process.env.API_PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from API');
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
