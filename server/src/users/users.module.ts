import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Passport } from 'src/passports/passport.entity';
import { PassportsModule } from 'src/passports/passports.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, Passport]), PassportsModule],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
