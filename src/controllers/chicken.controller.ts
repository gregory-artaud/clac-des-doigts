import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { Chicken } from 'src/entities/chicken.entity';
import { ChickenService } from '../services/chicken.service';

@Controller('chicken')
export class ChickenController {
  constructor(private readonly chickenService: ChickenService) {}

  @Get()
  async findAll(): Promise<Chicken[]> {
    return await this.chickenService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Chicken> {
    return await this.chickenService.findOneById(id);
  }

  @Post()
  postChickenAction(): string {
    return this.chickenService.getHello();
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
