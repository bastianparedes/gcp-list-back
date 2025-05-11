import { defineConfig } from 'drizzle-kit';

const credentials = {
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_ADMIN,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_DB,
  sslMode: process.env.DATABASE_SSL_MODE ?? 'disable'
};

// const URI = `postgresql://${credentials.user}:${credentials.password}@${credentials.host}:${credentials.port}/${credentials.database}?sslmode=${credentials.sslMode}`;
const URI = 'postgresql://admin:12345@localhost:5432/default?sslmode=disable';

export default defineConfig({
  out: './src/db/migrations',
  dialect: 'postgresql',
  schema: './src/db/schema.ts',
  dbCredentials: {
    url: URI
  }
});
