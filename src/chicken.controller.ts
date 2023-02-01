import { Controller, Get } from '@nestjs/common';
import { ChickenService } from './chicken.service';

@Controller('chicken')
export class ChickenController {
  constructor(private readonly chickenService: ChickenService) {}

  @Get()
  getHello(): string {
    return this.chickenService.getHello();
  }
}
