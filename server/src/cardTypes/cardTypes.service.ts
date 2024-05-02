import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCardTypeDto } from './dto/create-cardType.dto';
import { CardType } from './cardType.entity';

@Injectable()
export class CardTypesService {
  constructor(
    @InjectRepository(CardType)
    private typesRepository: Repository<CardType>,
  ) {}

  async create(createTypeDto: CreateCardTypeDto) {
    const type = await this.typesRepository.create(createTypeDto);
    return type;
  }

  async findAll() {
    const types = await this.typesRepository.find();
    return types;
  }

  async findOne(id: string) {
    const type = this.typesRepository.findOneBy({ id });
    return type;
  }

  async remove(id: string) {
    const type = await this.typesRepository.delete(id);
    return type;
  }
}
