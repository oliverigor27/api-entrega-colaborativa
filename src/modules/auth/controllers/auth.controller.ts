import { Body, Controller, Post, Res } from "@nestjs/common";
import { LoginDto } from "src/modules/auth/Dto/login.dto";
import { AuthService } from "../services/auth.service";
import { Response } from "express";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("User Auth")
@Controller("Auth")
export class AuthController
{
    constructor(private readonly authService: AuthService) {}

    @Post("sign-in")
    async loginUSer(@Body() data: LoginDto, @Res() res: Response)
    {
        let authToken = this.authService.singIn(data);

        return res.status(200).json({
            message: "Successful login!",
            authToken
        })
    }
}