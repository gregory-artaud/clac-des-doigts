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
import { ChickenService } from '../services/chicken.service';
import { UpdatePatchChickenDTO } from 'src/dto/updatePatchChicken.dto';
import { UpdatePutChickenDTO } from 'src/dto/updatePutChicken.dto';

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
  async updatePatch(
    @Param('id') id: string,
    @Body() updatePatchChickenDto: UpdatePatchChickenDTO,
  ): Promise<ChickenDTO> {
    return await this.chickenService.updatePatch(id, updatePatchChickenDto);
  }

  @Put(':id')
  async updatePut(
    @Param('id') id: string,
    @Body() updatePutChickenDto: UpdatePutChickenDTO,
  ): Promise<ChickenDTO> {
    return await this.chickenService.updatePut(id, updatePutChickenDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.chickenService.remove(id);
  }

  @Post('run/:id')
  async runChickenAction(@Param('id') id: string): Promise<ChickenDTO> {
    return await this.chickenService.run(id);
  }
}
