import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
//czy mamy dostęp do tego zasobu czy nie mamy I W ZALEŻNOŚCI OD TEGO JEST "FORBIDDEN RESOURCE LUB WIDZIANY RESOURCE"
class ApiGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.header('Authorization');
    return authHeader === process.env.API_KEY
  }
}

export default ApiGuard;
