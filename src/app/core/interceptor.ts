import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, catchError, finalize, throwError } from 'rxjs';

export function loggingInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const messageService = inject(MessageService);
  return next(req).pipe(
    catchError((error) => {
      if (error instanceof HttpErrorResponse) {
        handleHttpErrors(messageService, error);
      }
      return throwError(() => Error);
    }),
    finalize(() => {})
  );
}

function handleHttpErrors(service: MessageService, error: HttpErrorResponse) {
  service.clear();
  switch (error.status) {
    case 404:
      service.add({
        severity: 'info',
        summary: 'No se encontraron resultados.',
        detail: error.error['message'],
      });
      break;
    case 400:
      service.add({
        severity: 'info',
        summary: 'Solicitud incorrecta',
        detail: error.error['message'],
      });
      break;

    default:
      break;
  }
}
