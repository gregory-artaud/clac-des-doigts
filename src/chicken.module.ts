import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChickenController } from './controllers/chicken.controller';
import { Chicken } from './entities/chicken.entity';
import { ChickenService } from './services/chicken.service';

@Module({
  imports: [TypeOrmModule.forFeature([Chicken])],
  controllers: [ChickenController],
  providers: [ChickenService],
  exports: [ChickenService, TypeOrmModule],
})
export class ChickenModule {}
