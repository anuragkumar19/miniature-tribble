import { Elysia } from 'elysia'
import { HomePage } from '../pages/HomePage'
import { AuthPage } from '../pages/AuthPage'

export const indexRouter = new Elysia()

indexRouter.get('/', () => HomePage())
indexRouter.get('/auth', () => AuthPage())

// indexRouter.get('/a', ({ store }) => {
//     console.log(store.auth)
// })
