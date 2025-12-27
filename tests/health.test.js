const request = require('supertest');
const app = require('../src/app');

describe('Health Check API', () => {
  it('should return API running status', async () => {
    const res = await request(app).get('/health');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('status', 'OK');
  });
});
