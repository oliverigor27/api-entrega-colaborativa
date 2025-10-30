import { CompleteRegisterDTO } from "../../users/dto/completeRegister.dto";
import { RegisterDto } from "../dto/register.dto";

export interface IRegisterInterface {
    createUser(data: RegisterDto): Promise<{ isValid: boolean, id: string } | boolean>;
    createPostman(data: RegisterDto): Promise<{ message: string, id: string } | boolean>;
}