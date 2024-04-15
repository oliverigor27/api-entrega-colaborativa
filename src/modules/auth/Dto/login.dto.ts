import { ApiProperty } from "@nestjs/swagger";

export class LoginDto
{   
    @ApiProperty({
        description: "Email to login",
        type: String,
    })
    email: string;

    @ApiProperty({
        description: "Password to login",
        type: String,
    })
    password: string;
}