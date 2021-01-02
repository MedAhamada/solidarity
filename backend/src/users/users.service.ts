import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from './user.entity';
import { Repository } from 'typeorm';
import {TypeOrmCrudService} from '@nestjsx/crud-typeorm';
import {hash} from "../_utils/hasher";
import {exit} from "@nestjs/cli/actions";

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {
        super(usersRepository);
    }

    findOneByUserNameOrEmail(usernameOrEmail: string): Promise<User> {
        console.log(usernameOrEmail);
        return this.usersRepository.findOne({
            where: [
                {username: usernameOrEmail},
                {email: usernameOrEmail},
            ]
        })
    }

    public async register(credentials): Promise<User> {
        const user = await this.toUserEntity(credentials);

        user.enabled = true;
        user.password = await hash(user.plainPassword);
        user.plainPassword = null;

        return await this.usersRepository.save(user);
    }

    public async toUserEntity(credentials) : Promise<User> {
        const user = new User();

        user.username = credentials.username;
        user.firstName = credentials.firstName;
        user.lastName = credentials.lastName;
        user.email = credentials.email;
        user.plainPassword = credentials.plainPassword;

        return user;
    }
}
