import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Passport } from './passport.entity';
import { PassportsService } from './passports.service';
import { PassportsController } from './passports.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Passport])],
  providers: [PassportsService],
  controllers: [PassportsController],
  exports: [PassportsService],
})
export class PassportsModule {}
