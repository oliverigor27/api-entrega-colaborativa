import { BadRequestException, Body, Controller, Post, Req, Res, UnauthorizedException, UseGuards } from "@nestjs/common";
import { LoginDto } from "src/modules/auth/Dto/login.dto";
import { AuthService } from "../services/auth.service";
import { Request, Response } from "express";
import { ApiTags } from "@nestjs/swagger";
import { LocalAuthGuard } from "../guards/local-auth.guard";

@ApiTags("User Auth")
@Controller("Auth")
export class AuthController
{
    constructor(private readonly authService: AuthService) {}

    @Post("sign-in")
    @UseGuards(LocalAuthGuard)
    async loginUSer(@Req() req: Request, @Res() res: Response)
    {
        const { email, password } = req.body;

        let authToken = await this.authService.validateUser(email, password);

        if(authToken == null) throw new UnauthorizedException("Cannot return!");

        return res.status(200).json({
            message: "Successful login!",
            authToken
        })
    }
}