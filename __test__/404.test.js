'use strict';
const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

// 404 err
describe('sever', () => {
  it('should respond with 404 on an invalid route', () => {
    return mockRequest.get('/401-class').then((results) => {
      expect(results.status).toBe(404);
    });
  });

  // 404 err
  it('should respond with 404 on an invalid method', () => {
    return mockRequest.patch('/categories').then((results) => {
      expect(results.status).toBe(404);
    });
  });
});