import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCardTypeDto } from './dto/create-cardType.dto';
import { CardType } from './cardType.entity';

@Injectable()
export class CardTypesService {
  constructor(
    @InjectRepository(CardType)
    private cardTypesRepository: Repository<CardType>,
  ) {}

  async create(dto: CreateCardTypeDto) {
    const cardType = await this.cardTypesRepository.save(dto);
    return cardType;
  }

  async findAll() {
    const cardTypes = await this.cardTypesRepository.find();
    return cardTypes;
  }

  async findOne(id: string) {
    const cardType = await this.cardTypesRepository.findOneBy({ id });
    return cardType;
  }

  async remove(id: string) {
    const cardType = await this.cardTypesRepository.delete(id);
    return cardType;
  }
}
