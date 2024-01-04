import { CompleteRegisterDTO } from "../../dto/completeRegister.dto";
import { UpdatePasswordDto } from "../../dto/updatePassword.dto";

export interface IUserConfigRepository
{
    completeRegister(id: string, data: CompleteRegisterDTO) : Promise<String>;
    updatePassword(id: string, data: UpdatePasswordDto): Promise<string>
    updateProfile(id: string, data: CompleteRegisterDTO): Promise<string>
}