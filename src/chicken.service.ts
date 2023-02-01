import { Injectable } from '@nestjs/common';

@Injectable()
export class ChickenService {
  getHello(): string {
    return 'Hello World!';
  }
}
