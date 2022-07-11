import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola mundo!';
  }

  @Get('nuevo')
  newEndPoint() {
    return '¡Generé un nuevo endpoint!';
  }

  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }

  


}
