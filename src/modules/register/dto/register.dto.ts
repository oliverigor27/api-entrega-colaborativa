import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, IsStrongPassword, IsEnum } from 'class-validator';
import { Roles } from '../enum/roles.enum';

export class RegisterDto {
    @ApiProperty({
        description: "Username to create identify a new user",
        type: String,
        minLength: 5
    })
    @IsNotEmpty()
    @IsString()
    readonly username: string;

    @ApiProperty({
        description: "Email referent to user which is applying to the app",
        type: String
    })
    @IsNotEmpty({
        message: "You must inform a valid email!"
    })
    @IsEmail()
    readonly email: string;

    @ApiProperty({
        description: "new password",
        type: String
    })
    @IsNotEmpty({
        message: "You must informa a valid password!"
    })
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    })
    readonly password: string;

    @ApiProperty({
        description: "Role for identify user",
        type: String
    })
    @IsNotEmpty({
        message: "You must informa a valid role!"
    })
    @IsEnum(Roles)
    readonly role : string;
}