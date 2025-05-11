import type { FastifyInstance } from 'fastify';
import getUser from './user/get';
import createUser from './user/create';
import deleteUser from './user/delete';
import updateUser from './user/update';

const routes = async (server: FastifyInstance) => {
  server.register(getUser, {
    prefix: '/user'
  });

  server.register(createUser, {
    prefix: '/user'
  });

  server.register(deleteUser, {
    prefix: '/user'
  });

  server.register(updateUser, {
    prefix: '/user'
  });

  return server;
};

export default routes;
