import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateChickenDTO } from 'src/dto/createChicken.dto';
import { ChickenDTO } from 'src/dto/chicken.dto';
import { Chicken } from 'src/entities/chicken.entity';
import { Repository } from 'typeorm';
import { UpdatePatchChickenDTO } from 'src/dto/updatePatchChicken.dto';
import { UpdatePutChickenDTO } from 'src/dto/updatePutChicken.dto';

@Injectable()
export class ChickenService {
  constructor(
    @InjectRepository(Chicken)
    private chickenRepository: Repository<Chicken>,
  ) {}

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

  async updatePatch(
    id: string,
    updatePatchChickenDto: UpdatePatchChickenDTO,
  ): Promise<ChickenDTO> {
    const chicken = await this.findOneById(id);

    if (!chicken) {
      throw new NotFoundException();
    }

    for (const property in updatePatchChickenDto) {
      chicken[property] = updatePatchChickenDto[property];
    }
    return await this.chickenRepository.save(chicken);
  }

  async updatePut(
    id: string,
    updatePutChickenDto: UpdatePutChickenDTO,
  ): Promise<ChickenDTO> {
    const chicken = await this.findOneById(id);

    if (!chicken) {
      return await this.create(updatePutChickenDto);
    }
    for (const property in updatePutChickenDto) {
      chicken[property] = updatePutChickenDto[property];
    }
    return await this.chickenRepository.save(chicken);
  }

  async remove(id: string): Promise<void> {
    await this.chickenRepository.delete(parseInt(id));
  }

  async run(id: string): Promise<ChickenDTO> {
    const chicken = await this.findOneById(id);

    if (!chicken) {
      throw new NotFoundException();
    }
    chicken.steps++;
    return await this.chickenRepository.save(chicken);
  }
}
