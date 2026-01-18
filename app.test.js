const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should return status 200 with message "Todo API"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Todo API');
  });
});
