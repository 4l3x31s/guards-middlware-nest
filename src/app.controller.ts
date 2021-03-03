import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { GuardEjemploGuard } from './guard-ejemplo.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(GuardEjemploGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':id')
  @UseGuards(GuardEjemploGuard)
  pruebaServicio(@Param('id') id: any) {
    return this.appService.getHello();
  }
}
