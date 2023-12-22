import { PrismaService } from "src/infra/prisma/services/prisma.service";
import { RegisterDto } from "../dto/register.dto";
import { IRegisterInterface } from "./Iregister.repository";
import { BadRequestException, Injectable } from "@nestjs/common";
import { CompleteRegisterDTO } from "../dto/completeRegister.dto";

@Injectable()
export class RegisterRepository implements IRegisterInterface {

    constructor(private readonly prismaService : PrismaService) {}

    async createUser(data: RegisterDto): Promise<RegisterDto> {

        const { role } = data;

        
        if(role == 'receiver') {
            const createReceiver = this.prismaService.receiver.create({
                data
            });

            return createReceiver
        } else {
            throw new BadRequestException("This role do not exist yet");
        }

    }
    
    async completeRegister(id: string, data: CompleteRegisterDTO): Promise<boolean> {
        return true;
    }
}