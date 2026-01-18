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

describe('POST /todos', () => {
  beforeEach(() => {
    clearTodos();
  });

  it('should create a todo and return 201 status', async () => {
    const response = await request(app)
      .post('/todos')
      .send({ text: 'Buy milk' });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.text).toBe('Buy milk');
    expect(response.body.completed).toBe(false);
  });

  it('should return 400 if text field is missing', async () => {
    const response = await request(app)
      .post('/todos')
      .send({});

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('text field is required');
  });

  it('should add todo to the store', async () => {
    await request(app)
      .post('/todos')
      .send({ text: 'Test todo' });

    const getResponse = await request(app).get('/todos');
    expect(getResponse.body).toHaveLength(1);
    expect(getResponse.body[0].text).toBe('Test todo');
  });
});
