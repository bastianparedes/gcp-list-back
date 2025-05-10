import type { FastifyInstance } from 'fastify';
import { Static, Type } from '@sinclair/typebox';

const body = Type.Object({
  id: Type.Number()
});

export type BodyType = Static<typeof body>;

export default async (server: FastifyInstance) => {
  server.delete<{ Body: BodyType }>(
    '/',
    {
      schema: {
        body
      }
    },
    (req, res) => {
      res.code(200).send({ health: true, version: req.body.id });
    }
  );

  return server;
};
