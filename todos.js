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

function deleteTodo(id) {
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) {
    return false;
  }
  todos.splice(index, 1);
  return true;
}

module.exports = {
  todos,
  addTodo,
  getTodos,
  clearTodos,
  deleteTodo
};
