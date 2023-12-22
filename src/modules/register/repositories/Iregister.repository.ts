import { CompleteRegisterDTO } from "../dto/completeRegister.dto";
import { RegisterDto } from "../dto/register.dto";

export interface IRegisterInterface {
    createUser(data: RegisterDto): Promise<RegisterDto>;
    completeRegister(id: string, data: CompleteRegisterDTO): Promise<boolean>
}