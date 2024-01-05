import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CompleteRegisterDTO } from "../dto/completeRegister.dto";
import { UserConfigService } from "../services/userConfig.service";

// Just authorized users can access these routes

@ApiTags("User Config")
@Controller("user-config")
export class UserConfigController
{
    constructor(private readonly userConfigService: UserConfigService) {}

    // This route is just used one time to complet user register
    @Put("complete-register/:id")
    async completeRegister(@Param("id") id: string, @Body() data: CompleteRegisterDTO)
    {
        return this.userConfigService.completeRegister(id, data);
    }
}