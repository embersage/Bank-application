import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCardDto } from './dto/create-card.dto';
import { Card } from './card.entity';
import { AccountsService } from 'src/accounts/accounts.service';
import { CardTypesService } from 'src/cardTypes/cardTypes.service';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Card)
    private cardsRepository: Repository<Card>,
    private accountsService: AccountsService,
    private cardTypesService: CardTypesService,
  ) {}

  async create(dto: CreateCardDto) {
    const account = await this.accountsService.findOne(dto.accountId);
    const cardType = await this.cardTypesService.findOne(dto.cardTypeId);
    const card = await this.cardsRepository.save({
      ...dto,
      account,
      cardType,
    });
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
