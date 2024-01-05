import { Injectable } from "@nestjs/common";
import { CompleteRegisterDTO } from "../dto/completeRegister.dto";
import { UserConfigRepository } from "../repository/UserConfig/userConfig.repository";

@Injectable()
export class UserConfigService 
{
    constructor(private readonly userConfigRepository : UserConfigRepository) {}

    async completeRegister(id: string, data: CompleteRegisterDTO) 
    {
        try {
            return this.userConfigRepository.completeRegister(id, data);
        } catch (error) {
            throw new Error("Cannot complete register!" + error.message);
        }
    }
}