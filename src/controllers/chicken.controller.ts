import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { ChickenService } from '../services/chicken.service';

@Controller('chicken')
export class ChickenController {
  constructor(private readonly chickenService: ChickenService) {}

  @Get()
  getChickenAction(): string {
    return this.chickenService.getHello();
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
