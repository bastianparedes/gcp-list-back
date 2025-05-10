/* import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';

import * as schema from './schema';
import environment from '../../env';

const DATABASE_PROTOCOL = environment.DATABASE_PROTOCOL;
const DATABASE_USER = environment.DATABASE_USER;
const DATABASE_PASSWORD = environment.DATABASE_PASSWORD;
const DATABASE_HOST = environment.DATABASE_HOST;
const DATABASE_PORT = environment.DATABASE_PORT;
const DATABASE_NAME = environment.DATABASE_NAME;
const DATABASE_SSL_MODE = environment.DATABASE_SSL_MODE;
const URI = `${DATABASE_PROTOCOL}://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}?sslmode=${DATABASE_SSL_MODE}`;

const client = new Client({
  connectionString: URI
});

client.connect().catch(() => {});
const db = drizzle(client, { schema });

export default db;
 */
