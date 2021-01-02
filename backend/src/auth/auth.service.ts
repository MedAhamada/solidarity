import {Injectable} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {JwtService} from '@nestjs/jwt';
import {compare} from '../_utils/hasher';
import {User} from '../users/user.entity';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ){}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByUserNameOrEmail(username);

    if (user && user.password && user.enabled){
      const match = await compare(password, user.password);
      if (match) {
        return user;
      }
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload)
    };
  }

  async me(token: string): Promise<User> {
    const userId = this.jwtService.decode(token).sub;

    return this.usersService.findOne(userId);
  }

  async register(credentials) {
    return await this.usersService.register(credentials);
  }
}
