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
import { FindChickenDTO } from 'src/dto/findChicken.dto';
import { ChickenService } from '../services/chicken.service';

@Controller('chicken')
export class ChickenController {
  constructor(private readonly chickenService: ChickenService) {}

  @Get()
  async findAll(): Promise<FindChickenDTO[]> {
    return await this.chickenService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<FindChickenDTO> {
    return await this.chickenService.findOneById(id);
  }

  @Post()
  create(@Body() createChickenDto: CreateChickenDTO): Promise<FindChickenDTO> {
    return this.chickenService.create(createChickenDto);
  }

  @Put()
  putChickenAction(): string {
    return this.chickenService.getHello();
  }

  @Patch()
  patchChickenAction(): string {
    return this.chickenService.getHello();
  }

  @Delete()
  deleteChickenAction(): string {
    return this.chickenService.getHello();
  }

  @Get('run')
  runChickenAction(): string {
    return this.chickenService.getHello();
  }
}
