import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class LogInterceptor implements NestInterceptor 
{
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> 
    {
        return next.handle().pipe(tap(() => {
            const request = context.switchToHttp().getRequest()

            console.log(`[${new Date()}] - A new user was created at route ${request.url}...`)
        }));
    }
}