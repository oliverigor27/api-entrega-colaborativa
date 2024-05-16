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
    ) {}

    async validateUser(email: string, password: string)
    {
      const user = await this.prismaService.user.findUnique({
        where: {
          email
        }
      });

      if (user && (await bcrypt.compare(password, user.password))) 
      {
        return this.jwtService.sign({ id_card: user.id_card });
      }
      return null;
    }
}