import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class UserDto {
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
        description: "Confirm password property",
        type: String
    })
    @IsNotEmpty({
        message: "You must informa a valid password!"
    })
    readonly confirmPasswod: string;
}