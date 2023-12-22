import { Body, Controller, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RegisterService } from "../services/register.service";
import { RegisterDto } from "../dto/register.dto";
import { CompleteRegisterDTO } from "../dto/completeRegister.dto";

@ApiTags("Register")
@Controller("register")
export class RegisterController {
    constructor(private readonly registerService : RegisterService) {}

    @Post("register-new-user")
    async create(@Body() body : RegisterDto) {
        return this.registerService.create(body);
    }

    @Post("complete-register/:id")
    async completeRegister(@Param('id') id: string, body: CompleteRegisterDTO) {
        
    }

}