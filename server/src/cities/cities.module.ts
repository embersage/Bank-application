import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './city.entity';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { Province } from 'src/provinces/province.entity';
import { ProvincesModule } from 'src/provinces/provinces.module';

@Module({
  imports: [TypeOrmModule.forFeature([City, Province]), ProvincesModule],
  providers: [CitiesService],
  controllers: [CitiesController],
  exports: [CitiesService],
})
export class CitiesModule {}
