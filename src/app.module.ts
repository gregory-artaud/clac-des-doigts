import { Module } from '@nestjs/common';
import { ChickenController } from './chicken.controller';
import { ChickenService } from './chicken.service';

@Module({
  imports: [],
  controllers: [ChickenController],
  providers: [ChickenService],
})
export class AppModule {}
