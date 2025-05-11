import type { FastifyInstance } from 'fastify';
import { Static, Type } from '@sinclair/typebox';
import { client, operators, schema } from '../../../db';

const body = Type.Object({
  id: Type.Number(),
  name: Type.String()
});

export type BodyType = Static<typeof body>;

export default async (server: FastifyInstance) => {
  server.put<{ Body: BodyType }>(
    '/',
    {
      schema: {
        body
      }
    },
    async (req, res) => {
      const response = await client
        .update(schema.Users)
        .set({
          name: req.body.name
        })
        .where(operators.eq(schema.Users.id, req.body.id));
      res.code(200).send(response);
    }
  );

  return server;
};
