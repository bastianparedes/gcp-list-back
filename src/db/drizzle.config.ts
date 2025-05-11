import { defineConfig } from 'drizzle-kit';
import url from './url';

export default defineConfig({
  out: './src/db/migrations',
  dialect: 'postgresql',
  schema: './src/db/schema.ts',
  dbCredentials: {
    url: url
  }
});
