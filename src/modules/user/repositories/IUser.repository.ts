import { UserDto } from "../dto/user.dto";

export interface IUserInterface {
    createUser(data: UserDto): Promise<UserDto>;
    confirmPassWord(token: string): Promise<string>;
    recoverPassword(email: string): boolean;
}