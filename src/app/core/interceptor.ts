import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable, catchError, finalize, throwError } from 'rxjs';

export function loggingInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const reqWithHeader = req.clone({
    headers: req.headers.append(
      'Authorization',
      `Bearer ${localStorage.getItem('token') || ''}`
    ),
  });
  return next(reqWithHeader).pipe(
    catchError((error) => {
      if (error instanceof HttpErrorResponse) {
      }
      console.error(error);
      return throwError(() => Error);
    }),
    finalize(() => {})
  );
}
