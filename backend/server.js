const express = require('express');
const app = express();

const PORT = 3000;

app.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'pong' });
});

app.post('/graphql', (req, res) => {
  return res.status(200).json({ message: 'TODO' });
});

app.listen(PORT, () => {
  console.log(`Back-End is up and running at port ${PORT}`);
});
