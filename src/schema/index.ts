import {
    pgTable,
    integer,
    serial,
    timestamp,
    text,
    boolean,
} from 'drizzle-orm/pg-core'

export const tweets = pgTable('tweets', {
    id: serial('id').primaryKey(),
    createdAt: timestamp('created_at', { withTimezone: true })
        .defaultNow()
        .notNull(),

    title: text('title').notNull().default('My Quiz'),
    description: text('description'),
    cover: text('cover'),
    published: boolean('published').notNull().default(false),
    publishedAt: timestamp('published_at', { withTimezone: true }),

    authorId: text('author_id').notNull(),
})
