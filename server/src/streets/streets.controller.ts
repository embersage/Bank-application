import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateStreetDto } from './dto/create-street.dto';
import { StreetsService } from './streets.service';

@Controller('streets')
export class StreetsController {
  constructor(private readonly streetsService: StreetsService) {}

  @Post()
  create(@Body() dto: CreateStreetDto) {
    return this.streetsService.create(dto);
  }

  @Get()
  findAll() {
    return this.streetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.streetsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.streetsService.remove(id);
  }
}
