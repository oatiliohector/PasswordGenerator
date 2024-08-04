import { Get, Controller } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller()
export class UserController{
    constructor(private readonly userService: UserService){}

    @Get('/user/password')

    async getUserPassword(): Promise<string>{
        return await this.userService.getUserPassword();
    }
}