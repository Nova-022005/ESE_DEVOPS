const request = require('supertest');
const app = require('./index');

describe('App API Tests', () => {
  
  test('GET /health should return status OK', async () => {
    const response = await request(app)
      .get('/health')
      .expect(200);
    
    expect(response.body).toEqual({
      status: "OK"
    });
  });

  test('GET /health should return JSON content-type', async () => {
    const response = await request(app)
      .get('/health');
    
    expect(response.type).toBe('application/json');
  });

});
