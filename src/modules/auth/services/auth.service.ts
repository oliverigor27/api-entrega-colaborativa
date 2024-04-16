import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "src/modules/auth/Dto/login.dto";
import * as bcrypt from "bcrypt";
import { PrismaService } from "src/infra/prisma/services/prisma.service";


@Injectable()
export class AuthService
{
    constructor(
        private readonly jwtService: JwtService,
        private readonly prismaService : PrismaService
    )
    {}

    generateToken(email: string)
    {
        return this.jwtService.sign({
           sub: email,
        },
        {
            expiresIn: "7 days",
            issuer: "entrega",
        }
    )
    }


    async singIn({ email, password }: LoginDto) {
          const user = await this.prismaService.user.findUnique({
            where: {
              email,
            },
          });
    
          if (!user) throw new BadRequestException("User cannot be found!");
    
          const isPasswordValid = await bcrypt.compare(password, user.password);
    
          if (!isPasswordValid) throw new BadRequestException("Password invalid!");
    
          const token = this.generateToken(email);
    
          return token;
      }
}