import { Elysia, t } from 'elysia'
import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'
import { clerkPlugin } from 'elysia-clerk'
import { indexRouter } from './routes'
import { runMigrations } from './config/db'

runMigrations()

const PORT = Bun.env.PORT || 3000

const app = new Elysia()
    .use(html())
    .use(staticPlugin())
    .use(clerkPlugin())

    .use(indexRouter) // Routes

    .listen(PORT)

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
