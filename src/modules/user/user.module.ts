import { Module } from "@nestjs/common";
import { UserRepository } from "./repositories/User.repository";
import { UserService } from "./services/User.service";
import { UserController } from "./controllers/User.controller";

@Module({
    controllers: [UserController],
    providers: [UserRepository, UserService],
    imports: []
})
export class UserModule {}