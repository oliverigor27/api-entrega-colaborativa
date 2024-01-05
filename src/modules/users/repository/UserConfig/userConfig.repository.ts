import { PrismaService } from "src/infra/prisma/services/prisma.service";
import { CompleteRegisterDTO } from "../../dto/completeRegister.dto";
import { UpdatePasswordDto } from "../../dto/updatePassword.dto";
import { IUserConfigRepository } from "./Iuserconfig.repository";
import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class UserConfigRepository implements IUserConfigRepository
{
    constructor(private readonly prismaService: PrismaService) {}

    async completeRegister(id: string, data: CompleteRegisterDTO): Promise<String> 
    {
        try {
            if (!data.id_card) {
                throw new BadRequestException("id_card should not be empty");
            }

            const user = await this.prismaService.user.findUnique({
                where: {
                    id,
                },
            });
    
            if (!user) {
                throw new Error("Cannot find the user!");
            }

            await this.prismaService.user.update({
                where: { id },
                data
            });
        
            return "User was successfully created!";
        } catch (error) {
            throw new UnauthorizedException("Cannot complete register!");
        }
    }
    

    updatePassword(id: string, data: UpdatePasswordDto): Promise<string> {
        throw new Error("Method not implemented.");
    }
    updateProfile(id: string, data: CompleteRegisterDTO): Promise<string> {
        throw new Error("Method not implemented.");
    }
    
}