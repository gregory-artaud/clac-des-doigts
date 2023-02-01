import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateChickenDTO } from 'src/dto/createChicken.dto';
import { ChickenDTO } from 'src/dto/chicken.dto';
import { UpdateChickenDTO } from 'src/dto/updateChicken.dto';
import { ChickenService } from '../services/chicken.service';

@Controller('chicken')
export class ChickenController {
  constructor(private readonly chickenService: ChickenService) {}

  @Get()
  async findAll(): Promise<ChickenDTO[]> {
    return await this.chickenService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ChickenDTO> {
    return await this.chickenService.findOneById(id);
  }

  @Post()
  async create(
    @Body() createChickenDto: CreateChickenDTO,
  ): Promise<ChickenDTO> {
    return this.chickenService.create(createChickenDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateChickenDto: UpdateChickenDTO,
  ): Promise<ChickenDTO> {
    return await this.chickenService.update(id, updateChickenDto);
  }

  @Put()
  async putChickenAction(): Promise<string> {
    return await this.chickenService.getHello();
  }

  @Delete()
  async deleteChickenAction(): Promise<string> {
    return await this.chickenService.getHello();
  }

  @Get('run')
  async runChickenAction(): Promise<string> {
    return await this.chickenService.getHello();
  }
}
