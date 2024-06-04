import { Injectable } from '@angular/core';
import { PartyService } from './party.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TockenInspectorService implements HttpInterceptor {

  constructor(private authService: PartyService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // Check if the response contains a new token
          const newToken = event.headers.get('new-token');
          if (newToken) {
            console.log(newToken);
            // Update the stored token
            localStorage.setItem('token', newToken);
          }
        }
      })
    );
  }
}
