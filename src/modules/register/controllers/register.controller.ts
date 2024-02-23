import { Body, Controller, Param, Post, UseInterceptors } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RegisterService } from "../services/register.service";
import { LogInterceptor } from "src/infra/interceptors/log.interceptor";
import { RegisterDto } from "../Dto/register.dto";

@ApiTags("User Register")
@Controller("register")
export class RegisterController {
    constructor(private readonly registerService : RegisterService) {}

    @Post("register-new-user")
    @UseInterceptors(LogInterceptor)
    async create(@Body() body : RegisterDto) {
        return this.registerService.create(body);
    }
}