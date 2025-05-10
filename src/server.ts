import routes from './routes';
import type { FastifyInstance } from 'fastify';

const options = {};

export { options };
export default (server: FastifyInstance) => {
  server.register(routes, {
    prefix: '/'
  });

  return server;
};
