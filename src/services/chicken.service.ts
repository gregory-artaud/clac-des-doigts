import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateChickenDTO } from 'src/dto/createChicken.dto';
import { FindChickenDTO } from 'src/dto/findChicken.dto';
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

  async findAll(): Promise<FindChickenDTO[]> {
    return await this.chickenRepository.find();
  }

  async findOneById(id: string): Promise<FindChickenDTO> {
    return await this.chickenRepository.findOneBy({
      id: parseInt(id),
    });
  }

  async create(createChickenDto: CreateChickenDTO): Promise<FindChickenDTO> {
    const chicken = new Chicken();

    chicken.name = createChickenDto.name;
    chicken.weight = createChickenDto.weight;
    chicken.steps = 0;
    chicken.isRunning = false;
    return await this.chickenRepository.save(chicken);
  }
}
