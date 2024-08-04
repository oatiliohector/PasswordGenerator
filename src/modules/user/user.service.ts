import { Injectable } from "@nestjs/common";
import { PasswordGenerator } from "../password/password-generator";

@Injectable()
export class UserService{
    async getUserPassword(): Promise<string>{

        const passwordGenerator = new PasswordGenerator();

        try{
            const password = await passwordGenerator.generatePassword();
            return password;
        }catch(error){
            return error;
        }

    }
}