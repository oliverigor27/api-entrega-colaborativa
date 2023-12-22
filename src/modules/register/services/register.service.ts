import { Injectable } from '@nestjs/common';
import { RegisterRepository } from '../repositories/register.repository';
import { RegisterDto } from '../dto/register.dto';


@Injectable()
export class RegisterService {

    constructor(private readonly registerRepository: RegisterRepository) {}

    async create(data: RegisterDto) {
        return this.registerRepository.createUser(data);
    }

}