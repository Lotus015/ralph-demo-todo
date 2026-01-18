const express = require('express');
const { getTodos } = require('./todos');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Todo API' });
});

app.get('/todos', (req, res) => {
  res.status(200).json(getTodos());
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
