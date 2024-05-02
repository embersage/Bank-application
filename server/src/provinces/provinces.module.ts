import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Province } from './province.entity';
import { ProvincesService } from './provinces.service';
import { ProvincesController } from './provinces.controller';
import { Country } from 'src/countries/country.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Province, Country])],
  providers: [ProvincesService],
  controllers: [ProvincesController],
  exports: [ProvincesService],
})
export class ProvincesModule {}
