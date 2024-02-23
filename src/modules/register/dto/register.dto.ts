import { IsString, IsEmail, IsNotEmpty, IsStrongPassword, IsEnum, MinLength } from 'class-validator';
import { Roles } from '../enum/roles.enum';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
    @ApiProperty({
        description: "Username to create identify a new user",
        type: String,
    })
    @MinLength(5)
    @IsNotEmpty({
       message: "You must informe a valid username!" 
    })
    @IsString()
    readonly username: string;

    @ApiProperty({
        description: "Username to create identify a new user",
        type: String,
    })
    @IsNotEmpty({
        message: "You must inform a valid email!"
    })
    @IsEmail()
    readonly email: string;

    @ApiProperty({
        description: "Username to create identify a new user",
        type: String,
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
        description: "Username to create identify a new user",
        type: String,
    })
    @IsNotEmpty({
        message: "You must informa a valid role!"
    })
    @IsEnum(Roles)
    readonly role : string;
}