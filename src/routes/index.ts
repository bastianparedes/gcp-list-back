import type { FastifyInstance } from 'fastify';
import getUser from './user/get';
import createUser from './user/create';
import deleteUser from './user/delete';
import updateUser from './user/update';

const routes = async (server: FastifyInstance) => {
  server.register(getUser, {
    prefix: '/user/get'
  });

  server.register(createUser, {
    prefix: '/user/post'
  });

  server.register(deleteUser, {
    prefix: '/user/delete'
  });

  server.register(updateUser, {
    prefix: '/user/put'
  });

  return server;
};

export default routes;
