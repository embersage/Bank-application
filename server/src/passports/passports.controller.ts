import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreatePassportDto } from './dto/create-passport.dto';
import { PassportsService } from './passports.service';

@Controller('passports')
export class PassportsController {
  constructor(private readonly passportsService: PassportsService) {}

  @Post()
  create(@Body() dto: CreatePassportDto) {
    return this.passportsService.create(dto);
  }

  @Get()
  findAll() {
    return this.passportsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passportsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passportsService.remove(id);
  }
}
