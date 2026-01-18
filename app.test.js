const request = require('supertest');
const app = require('./app');
const { clearTodos } = require('./todos');

describe('GET /', () => {
  it('should return status 200 with message "Todo API"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Todo API');
  });
});

describe('GET /todos', () => {
  beforeEach(() => {
    clearTodos();
  });

  it('should return 200 status code', async () => {
    const response = await request(app).get('/todos');
    expect(response.status).toBe(200);
  });

  it('should return empty array initially', async () => {
    const response = await request(app).get('/todos');
    expect(response.body).toEqual([]);
  });

  it('should return JSON array of todos', async () => {
    const response = await request(app).get('/todos');
    expect(response.headers['content-type']).toMatch(/application\/json/);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
