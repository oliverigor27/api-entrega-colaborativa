import { UserDto } from "../dto/user.dto";
import { IUserInterface } from "./IUser.repository";

export class UserRepository implements IUserInterface {
    async createUser(data: UserDto): Promise<UserDto> {
        return data;
    }
    confirmPassWord(token: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    recoverPassword(email: string): boolean {
        throw new Error("Method not implemented.");
    }
}