import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, IsStrongPassword, IsEnum } from 'class-validator';

export class CompleteRegisterDTO {
    @ApiProperty({
        description: "First name of the user",
    })
    @IsString()
    @IsNotEmpty()
    readonly first_name : string;
    
    @ApiProperty({
        description: "Last name of the user"
    })
    @IsNotEmpty()
    @IsString()
    readonly last_name : string;

    @ApiProperty({
        description: "Address where the use live or where will be use to get the packages"
    })
    @IsNotEmpty()
    @IsString()
    readonly address  :  string;

    @ApiProperty({
        description: "City where user lives"
    })
    @IsNotEmpty()
    @IsString()
    readonly city : string;

    @ApiProperty({
        description: "State Where User Lives",
        maxLength: 2
    })
    @IsNotEmpty()
    @IsString()
    readonly state : string;

    @ApiProperty({
        description: "Country where the user lives"
    })
    @IsNotEmpty()
    @IsString()
    readonly country : string;

    @ApiProperty({
        description: "Federal Id card where the user lives"
    })
    @IsNotEmpty()
    @IsString()
    readonly id_card: string;
}