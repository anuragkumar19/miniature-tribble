import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import * as schema from '../schema'

const databaseUrl = Bun.env.DATABASE_URL!

// for migrations
export async function runMigrations() {
    const migrationClient = postgres(databaseUrl, { max: 1 })
    migrate(drizzle(migrationClient), {
        migrationsFolder: './drizzle',
    })
}

// for query purposes
const queryClient = postgres(databaseUrl)

export const db = drizzle(queryClient, {
    logger: Bun.env.NODE_ENV === 'development',
    schema,
})
