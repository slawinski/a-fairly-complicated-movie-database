import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): string {
    return 'Welcome to Nrwl movie app powered by Angular and Nest!';
  }
}
