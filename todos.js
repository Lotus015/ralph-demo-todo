let todos = [];
let nextId = 1;

function addTodo(text) {
  const todo = {
    id: nextId++,
    text: text,
    completed: false
  };
  todos.push(todo);
  return todo;
}

function getTodos() {
  return todos;
}

function clearTodos() {
  todos = [];
  nextId = 1;
}

module.exports = {
  todos,
  addTodo,
  getTodos,
  clearTodos
};
