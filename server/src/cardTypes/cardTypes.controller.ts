import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateCardTypeDto } from './dto/create-cardType.dto';
import { CardTypesService } from './cardTypes.service';

@Controller('cardTypes')
export class CardTypesController {
  constructor(private readonly cardTypesService: CardTypesService) {}

  @Post()
  create(@Body() dto: CreateCardTypeDto) {
    return this.cardTypesService.create(dto);
  }

  @Get()
  findAll() {
    return this.cardTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cardTypesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cardTypesService.remove(id);
  }
}
