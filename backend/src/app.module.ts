import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { InsuranceCompaniesModule } from './insurance-companies/insurance-companies.module';
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'password',
          database: 'mutuellesdb',
          entities: ['dist/**/*.entity{.ts,.js}'],
          synchronize: true,
      }),
      UsersModule,
      AuthModule,
      InsuranceCompaniesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
