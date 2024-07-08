import { FastifyInstance } from "fastify";
import { handleAuthentication } from "./controllers/authenticate";

export async function appRoutes(app: FastifyInstance){
    app.post('/autenticacao', handleAuthentication)
}