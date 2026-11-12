import Fastify from 'fastify'
import { equipRoutes } from './routes/equips-routes.js'
import cors from "@fastify/cors"

export function buildApp() {

    const app = Fastify({ logger: true })

    app.register(cors, { origin: '*' })

    app.register(equipRoutes, { prefix: '/equips' })

    return app
}