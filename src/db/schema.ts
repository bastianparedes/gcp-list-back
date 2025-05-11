import {
  timestamp,
  pgTable,
  serial,
  varchar,
  pgEnum
} from 'drizzle-orm/pg-core';

export const Status = pgEnum('status', [
  'pending',
  'authorized',
  'paused',
  'cancelled'
]);

export const Users = pgTable('users', {
  id: serial('id').primaryKey().unique().notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow()
});
