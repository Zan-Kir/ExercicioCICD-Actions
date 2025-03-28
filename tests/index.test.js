// tests/index.test.js
const request = require('supertest');
const app = require('../src/index');

describe('GET /api', () => {
  it('should return Hello world!', async () => {
    const res = await request(app).get('/api');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello world!');
  });
});

describe('GET /api/test', () => {
  it('should return a test message', async () => {
    const res = await request(app).get('/api/test');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Endpoint de teste');
  });
});

describe('GET /api/users', () => {
  it('should return a list of users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([
      { id: 1, name: 'Usuário 1' },
      { id: 2, name: 'Usuário 2' }
    ]);
  });
});

console.log('Iniciando os testes...');

jest.setTimeout(30000); 