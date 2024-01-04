import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class UpdatePasswordDto
{   
    @ApiProperty({
        description: "Old user password!"
    })
    @IsString()
    @IsNotEmpty()
    readonly currentPassword: string;

    @ApiProperty({
        description: "A new password to user"
    })
    @IsString()
    @IsNotEmpty()
    newPassword: string;

    @ApiProperty({
        description: "Field use to confirm the new password!"
    })
    @IsString()
    @IsNotEmpty()
    confirmPassword: string;
}