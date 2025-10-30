import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterRepository } from '../repositories/register.repository';
import { RegisterDto } from "../dto/register.dto"


@Injectable()
export class RegisterService {

    constructor(private readonly registerRepository: RegisterRepository) {}

    async create(data: RegisterDto) {
        try {

            if (data.role === "user") return await this.registerRepository.createUser(data);
            
            const result = await this.registerRepository.createPostman(data);
            
            return result;

        } catch (error) {
            // Tratar erro assíncrono aqui, se necessário.
            throw new Error("Erro when tried to create a new user!" + error.message);
        }
    }
    

}