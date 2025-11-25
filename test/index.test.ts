import { describe, expect, it } from 'vitest';
import request from 'supertest';
import { app } from '../src/index.js';

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});
