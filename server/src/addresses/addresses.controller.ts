import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { AddressesService } from './addresses.service';

@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @Post()
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.addressesService.create(createAddressDto);
  }

  @Get()
  findAll() {
    return this.addressesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressesService.remove(id);
  }
}
