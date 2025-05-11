import type { FastifyInstance } from 'fastify';
import { Static, Type } from '@sinclair/typebox';
import { client, schema } from '../../../db';

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
    async (req, res) => {
      const users = await client
        .select()
        .from(schema.Users)
        .limit(req.query.limit);
      res.code(200).send(users);
    }
  );

  return server;
};
