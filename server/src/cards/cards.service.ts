import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCardDto } from './dto/create-card.dto';
import { Card } from './card.entity';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Card)
    private cardsRepository: Repository<Card>,
  ) {}

  async create(createCardDto: CreateCardDto) {
    const card = await this.cardsRepository.save(createCardDto);
    return card;
  }

  async findAll() {
    const cards = await this.cardsRepository.find();
    return cards;
  }

  async findOne(id: string) {
    const card = this.cardsRepository.findOneBy({ id });
    return card;
  }

  async remove(id: string) {
    const card = await this.cardsRepository.delete(id);
    return card;
  }
}
