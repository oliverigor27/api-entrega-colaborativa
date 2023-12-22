import { Module } from "@nestjs/common";
import { PrismaModule } from "src/infra/prisma/prisma.module";
import { RegisterController } from "./controllers/register.controller";
import { RegisterService } from "./services/register.service";
import { RegisterRepository } from "./repositories/register.repository";

@Module({
    imports: [PrismaModule],
    controllers: [RegisterController],
    providers: [RegisterService, RegisterRepository]
})
export class RegisterModule {}