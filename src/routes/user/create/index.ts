import type { FastifyInstance } from 'fastify';
import { Static, Type } from '@sinclair/typebox';
import { client, schema } from '../../../db';

const body = Type.Object({
  name: Type.String()
});

export type BodyType = Static<typeof body>;

export default async (server: FastifyInstance) => {
  server.post<{ Body: BodyType }>(
    '/',
    {
      schema: {
        body
      }
    },
    async (req, res) => {
      const result = await client.insert(schema.Users).values({
        name: req.body.name
      });
      res.code(200).send({ health: true, version: result });
    }
  );

  return server;
};
