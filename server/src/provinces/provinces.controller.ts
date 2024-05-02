import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateProvinceDto } from './dto/create-province.dto';
import { ProvincesService } from './provinces.service';

@Controller('provinces')
export class ProvincesController {
  constructor(private readonly provincesService: ProvincesService) {}

  @Post()
  create(@Body() createProvinceDto: CreateProvinceDto) {
    return this.provincesService.create(createProvinceDto);
  }

  @Get()
  findAll() {
    return this.provincesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.provincesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.provincesService.remove(id);
  }
}
