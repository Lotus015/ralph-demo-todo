const express = require('express');
const { getTodos, addTodo, deleteTodo } = require('./todos');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Todo API' });
});

app.get('/todos', (req, res) => {
  res.status(200).json(getTodos());
});

app.post('/todos', (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'text field is required' });
  }

  const todo = addTodo(text);
  res.status(201).json(todo);
});

app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const deleted = deleteTodo(id);

  if (!deleted) {
    return res.status(404).json({ error: 'todo not found' });
  }

  res.status(204).send();
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
