import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "../services/User.service";
import { ApiTags } from "@nestjs/swagger";
import { UserDto } from "../dto/user.dto";

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('create-user')
    async createUser(@Body() data: UserDto) {
        try {
            return this.userService.createUser(data);
        } catch (error) {
            console.error(error, 'Such user cannot be created in our app!')
        }
    }

}