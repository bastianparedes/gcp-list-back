import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';

import * as schema from './schema';
import url from './url';

const client = new Client({
  connectionString: url
});

client.connect().catch(() => {});
const db = drizzle(client, { schema });

export default db;
