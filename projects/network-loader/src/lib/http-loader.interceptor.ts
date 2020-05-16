import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    Promise.resolve(null).then(() => {
      const nlContainer = document.getElementById('nl-container');
      nlContainer.style.display = 'block';
    });

    return next.handle(req).pipe(
      finalize(() => {
        const nlContainer = document.getElementById('nl-container');
        nlContainer.style.display = 'none';
      })
    );
  }
}
