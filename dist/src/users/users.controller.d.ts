import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): {
        email: string;
        name: string;
        password: string;
        id: number;
    };
    findAll(): import("./entities/user.entity").User[];
    findOne(id: string): void;
    update(id: string, updateUserDto: UpdateUserDto): {
        email: string;
        name: string;
        password: string;
        id: number;
    };
    remove(id: string): string;
}
