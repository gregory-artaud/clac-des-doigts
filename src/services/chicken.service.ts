import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateChickenDTO } from 'src/dto/createChicken.dto';
import { ChickenDTO } from 'src/dto/chicken.dto';
import { Chicken } from 'src/entities/chicken.entity';
import { Repository } from 'typeorm';
import { UpdateChickenDTO } from 'src/dto/updateChicken.dto';

@Injectable()
export class ChickenService {
  constructor(
    @InjectRepository(Chicken)
    private chickenRepository: Repository<Chicken>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async findAll(): Promise<ChickenDTO[]> {
    return await this.chickenRepository.find();
  }

  async findOneById(id: string): Promise<ChickenDTO> {
    return await this.chickenRepository.findOneBy({
      id: parseInt(id),
    });
  }

  async create(createChickenDto: CreateChickenDTO): Promise<ChickenDTO> {
    const chicken = new Chicken();

    chicken.name = createChickenDto.name;
    chicken.weight = createChickenDto.weight;
    chicken.steps = 0;
    chicken.isRunning = false;

    // can be undefined due to optional value
    if (createChickenDto.isRunning) {
      chicken.isRunning = createChickenDto.isRunning;
    }
    return await this.chickenRepository.save(chicken);
  }

  async update(
    id: string,
    updateChickenDto: UpdateChickenDTO,
  ): Promise<ChickenDTO> {
    const chicken = await this.findOneById(id);

    for (const property in updateChickenDto) {
      chicken[property] = updateChickenDto[property];
    }
    return await this.chickenRepository.save(chicken);
  }
}
