import { administrator, Prisma } from "@prisma/client";

export interface IAdminRepository{
    authenticate(data: Prisma.administratorCreateInput):Promise<administrator | null>
}