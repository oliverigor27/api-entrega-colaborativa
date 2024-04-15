import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "src/modules/auth/Dto/login.dto";



@Injectable()
export class AuthService
{
    constructor(private readonly jwtService: JwtService)
    {
    }

    generateToken(data: LoginDto)
    {
        return this.jwtService.sign({
           sub: data.email,
        },
        {
            expiresIn: "7 days",
            issuer: "entrega",
        }
    )
    }

    singIn(data: LoginDto)
    {
        let token = this.generateToken(data);

        return token;
    }
}