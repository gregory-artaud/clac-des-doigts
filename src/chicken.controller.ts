import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { ChickenService } from './chicken.service';

@Controller('chicken')
export class ChickenController {
  constructor(private readonly chickenService: ChickenService) {}

  @Get()
  getChicken(): string {
    return this.chickenService.getHello();
  }

  @Post()
  postChicken(): string {
    return this.chickenService.getHello();
  }

  @Put()
  putChicken(): string {
    return this.chickenService.getHello();
  }

  @Patch()
  patchChicken(): string {
    return this.chickenService.getHello();
  }

  @Delete()
  deleteChicken(): string {
    return this.chickenService.getHello();
  }
}
