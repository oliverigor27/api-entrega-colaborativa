import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";
import { PrismaModule } from "src/infra/prisma/prisma.module";
import { PassportModule } from "@nestjs/passport";
import { LocalStategy } from "./strategy/local.strategy";

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: "7d" }
        }),
        PrismaModule  
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStategy]
})
export class AuthModule {};