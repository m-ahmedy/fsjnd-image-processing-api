import supertest from 'supertest';
import { app } from '../index';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('gets the api endpoint', (done) => {
    request.get('/api').then((response) => {
      expect(response.status).toBe(200);
      done();
    });
  });

  it('gets the api/images endpoint', async (done) => {
    const response = await request.get(
      '/api/images?filename=fjord&width=100&height=100'
    );
    expect(response.status).toBe(200);
    done();
  });

  it('gets the api/images endpoint', async (done) => {
    const response = await request.get(
      '/api/images?filename=mock&width=100&height=100'
    );
    expect(response.status).toBe(404);
    done();
  });
});
