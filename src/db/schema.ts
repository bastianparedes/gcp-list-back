/* import { relations } from 'drizzle-orm';
import { timestamp, pgTable, serial, varchar, boolean, integer, pgEnum } from 'drizzle-orm/pg-core';

export const Status = pgEnum('status', ['pending', 'authorized', 'paused', 'cancelled']);

export const Users = pgTable('users', {
  id: serial('id').primaryKey().unique().notNull(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  passwordHash: varchar('password_hash', { length: 255 }).notNull(),
  firstName: varchar('first_name', { length: 255 }).notNull(),
  lastName: varchar('last_name', { length: 255 }).notNull(),
  subjects: varchar('subjects', { length: 255 }).array().notNull(),
  verified: boolean('verified').notNull().default(false),
  createdAt: timestamp('created_at').notNull().defaultNow()
});

export const Exams = pgTable('exams', {
  id: varchar('id', { length: 255 }).primaryKey().unique().notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  userId: integer('user_id').references(() => Users.id)
});

export const Suscriptions = pgTable('suscriptions', {
  id: varchar('id', { length: 255 }).primaryKey().unique().notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  status: Status('status').notNull(),
  planId: varchar('plan_id', { length: 255 }).notNull(),
  payerId: integer('payer_id').notNull(),
  userId: integer('user_id')
    .references(() => Users.id)
    .notNull()
});

export const UsersRelations = relations(Users, ({ many }) => ({
  exams: many(Exams),
  suscriptions: many(Suscriptions)
}));

export const ExamsRelations = relations(Exams, ({ one }) => ({
  user: one(Users, {
    fields: [Exams.userId],
    references: [Users.id]
  })
}));

export const SuscriptionsRelations = relations(Suscriptions, ({ one }) => ({
  user: one(Users, {
    fields: [Suscriptions.userId],
    references: [Users.id]
  })
}));
 */