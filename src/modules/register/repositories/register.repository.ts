import { PrismaService } from "src/infra/prisma/services/prisma.service";
import { RegisterDto } from "../Dto/register.dto";
import { IRegisterInterface } from "./Iregister.repository";
import * as bcrypt from "bcrypt";
import { BadRequestException, Injectable } from "@nestjs/common";

@Injectable()
export class RegisterRepository implements IRegisterInterface {

    constructor(private readonly prismaService : PrismaService) {}
    async createPostman(data: RegisterDto): Promise<{ message: string; id: string; }> {
        throw new Error("Method not implemented.");
    }

    async createUser({ email, password, role, username }: RegisterDto): Promise<{ isValid: boolean, id: string } | boolean> {        

        const createReceiver = await this.prismaService.user.create({
             data: {
                email,
                password: bcrypt.hashSync(password, 10),
                role,
                username
             }
        });

        if(!createReceiver) return false;

        return {
            isValid: true,
            id: createReceiver.id
        }   

    }
}