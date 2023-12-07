import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/User.repository';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
    constructor( private readonly userRepository: UserRepository ) {}

    async createUser(data: UserDto) {
        return this.userRepository.createUser(data);
    }
}