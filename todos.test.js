const { addTodo, getTodos, clearTodos } = require('./todos');

describe('In-Memory Data Store', () => {
  beforeEach(() => {
    clearTodos();
  });

  describe('addTodo', () => {
    it('should add a todo with id, text, and completed properties', () => {
      const todo = addTodo('Buy groceries');

      expect(todo).toHaveProperty('id');
      expect(todo.text).toBe('Buy groceries');
      expect(todo.completed).toBe(false);
    });

    it('should assign unique incrementing ids', () => {
      const todo1 = addTodo('First task');
      const todo2 = addTodo('Second task');

      expect(todo1.id).toBe(1);
      expect(todo2.id).toBe(2);
    });
  });

  describe('getTodos', () => {
    it('should return empty array initially', () => {
      const todos = getTodos();
      expect(todos).toEqual([]);
    });

    it('should return all added todos', () => {
      addTodo('Task 1');
      addTodo('Task 2');

      const todos = getTodos();

      expect(todos).toHaveLength(2);
      expect(todos[0].text).toBe('Task 1');
      expect(todos[1].text).toBe('Task 2');
    });
  });
});
