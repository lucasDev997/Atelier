import { Prisma, administrator } from "@prisma/client";
import { IAdminRepository } from "./admin-repository";
import { prisma } from "../lib/prisma";

export class PrismaAdminRepository implements IAdminRepository{
    async authenticate(data: Prisma.administratorCreateInput): Promise<administrator | null> {
        const admin = await prisma.administrator.findFirst({
            where: {
                username: data.username,
                password: data.password,
            }
        })

        return admin
    }

}