import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { Address } from './address.entity';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(Address)
    private addressesRepository: Repository<Address>,
  ) {}

  async create(createAddressDto: CreateAddressDto) {
    const address = await this.addressesRepository.save(createAddressDto);
    return address;
  }

  async findAll() {
    const addresses = await this.addressesRepository.find();
    return addresses;
  }

  async findOne(id: string) {
    const address = this.addressesRepository.findOneBy({ id });
    return address;
  }

  async remove(id: string) {
    const address = await this.addressesRepository.delete(id);
    return address;
  }
}
