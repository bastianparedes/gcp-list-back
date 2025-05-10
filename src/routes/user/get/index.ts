import type { FastifyInstance } from 'fastify';
import { Static, Type } from '@sinclair/typebox';

const querystring = Type.Object({
  limit: Type.Number()
});

export type QueryParamsType = Static<typeof querystring>;

export default async (server: FastifyInstance) => {
  server.get<{ Querystring: QueryParamsType }>(
    '/',
    {
      schema: {
        querystring
      }
    },
    (req, res) => {
      res.code(200).send({ health: true /* , version: req.query.limit */ });
    }
  );

  return server;
};
