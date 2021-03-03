import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class EjemploMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('prueba middleware');
    console.log(req.headers);
    next();
  }
}
