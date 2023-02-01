import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chicken } from 'src/entities/chicken.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChickenService {
  constructor(
    @InjectRepository(Chicken)
    private chickenRepository: Repository<Chicken>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async findAll(): Promise<Chicken[]> {
    return await this.chickenRepository.find();
  }

  async findOneById(id: string): Promise<Chicken> {
    return await this.chickenRepository.findOneBy({
      id: parseInt(id),
    });
  }
}
