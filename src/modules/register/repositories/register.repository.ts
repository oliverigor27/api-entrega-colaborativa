import { PrismaService } from "src/infra/prisma/services/prisma.service";
import { RegisterDto } from "../dto/register.dto";
import { IRegisterInterface } from "./Iregister.repository";
import { BadRequestException, Injectable } from "@nestjs/common";
import { CompleteRegisterDTO } from "../../users/dto/completeRegister.dto";

@Injectable()
export class RegisterRepository implements IRegisterInterface {

    constructor(private readonly prismaService : PrismaService) {}
    async createPostman(data: RegisterDto): Promise<{ message: string; id: string; }> {
        throw new Error("Method not implemented.");
    }

    async createUser(data: RegisterDto): Promise<{ message: string, id: string }> {
        const createReceiver = await this.prismaService.user.create({
            data
        });

        return {
            message: "User created successfully!",
            id: createReceiver.id
        }
    }
}