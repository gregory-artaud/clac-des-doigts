import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChickenController } from './controllers/chicken.controller';
import { Chicken } from './entities/chicken.entity';
import { ChickenService } from './services/chicken.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [Chicken],
      synchronize: true,
    }),
  ],
  controllers: [ChickenController],
  providers: [ChickenService],
})
export class AppModule {}
