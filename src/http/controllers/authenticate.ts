import { FastifyReply, FastifyRequest } from "fastify";
import { adminAuthenticationUseCase } from "../../services/authenticate";
import { PrismaAdminRepository } from "../../repositories/prisma-admin-repository";
import { string, z } from "zod";


interface IRequestBody{
    username: string,
    password: string,
}

export async function handleAuthentication(request: FastifyRequest, reply: FastifyReply){

    const {username, password} = request.body as IRequestBody
    

    try {
        const adminRepository = new PrismaAdminRepository()
        const service = new adminAuthenticationUseCase(adminRepository)
        const admin = await service.execute({username, password})
        return reply.status(200).send(admin)
    } catch (error) {
        return reply.status(404).send()
    }
}