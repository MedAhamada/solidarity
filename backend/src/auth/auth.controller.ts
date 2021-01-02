import {Body, Controller, Get, Post, Req, UseGuards} from '@nestjs/common';
import {LocalAuthGuard} from './local-auth.guard';
import {AuthService} from './auth.service';
import {JwtAuthGuard} from './jwt-auth.guard';
import { RegisterCredentials } from "./auth.types";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService){}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req){
    return this.authService.login(req.user);
  }

  @Post('logout')
  logout(@Req() req){
    return {};
  }

  @Post('register')
  async register(@Body() credentials: RegisterCredentials){
    return this.authService.register(credentials);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@Req() req){
    const token: string = req.header('authorization').split(' ')[1];

    return this.authService.me(token);
  }
}
