import { PrismaAdminRepository } from "../repositories/prisma-admin-repository";

interface IAuthenticationRequest{
    username: string,
    password: string
}

export class adminAuthenticationUseCase{
    constructor(private adminRepository: PrismaAdminRepository){}

    async execute({username, password}: IAuthenticationRequest){
        const admin = await this.adminRepository.authenticate({username, password})

        if(!admin){
            throw new Error("Invalid Credentials")
        }

        return admin;
    }
}