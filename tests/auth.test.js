process.env.JWT_SECRET = 'test_secret';

const request = require('supertest');
const app = require('../src/app');

describe('Auth API', () => {
  const user = {
    email: `test${Date.now()}@example.com`,
    password: 'password123',
    role: 'Owner'
  };

  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send(user);

    expect(res.statusCode).toBe(201);
  });

  it('should login user and return JWT token', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: user.email,
        password: user.password
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});
