import { Module } from "@nestjs/common";
import { UserConfigService } from "./services/userConfig.service";
import { UserConfigController } from "./controllers/userConfig.controller";
import { UserConfigRepository } from "./repository/UserConfig/userConfig.repository";
import { PrismaModule } from "src/infra/prisma/prisma.module";

@Module({
    controllers: [UserConfigController],
    providers: [UserConfigService, UserConfigRepository],
    imports: [PrismaModule]
})
export class UserModule {}