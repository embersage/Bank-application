import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Street } from './street.entity';
import { StreetsService } from './streets.service';
import { StreetsController } from './streets.controller';
import { City } from 'src/cities/city.entity';
import { CitiesModule } from 'src/cities/cities.module';

@Module({
  imports: [TypeOrmModule.forFeature([Street, City]), CitiesModule],
  providers: [StreetsService],
  controllers: [StreetsController],
  exports: [StreetsService],
})
export class StreetsModule {}
