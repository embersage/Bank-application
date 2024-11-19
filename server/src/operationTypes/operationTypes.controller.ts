import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateOperationTypeDto } from './dto/create-operationType.dto';
import { OperationTypesService } from './operationTypes.service';

@Controller('operationTypes')
export class OperationTypesController {
  constructor(private readonly operationTypesService: OperationTypesService) {}

  @Post()
  create(@Body() dto: CreateOperationTypeDto) {
    return this.operationTypesService.create(dto);
  }

  @Get()
  findAll() {
    return this.operationTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.operationTypesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.operationTypesService.remove(id);
  }
}
