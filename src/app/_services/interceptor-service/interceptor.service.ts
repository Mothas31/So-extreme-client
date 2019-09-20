import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse, HttpEvent, HttpHandler,HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { StorageService } from '../storage-service/storage.service';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private _router: Router, private _storageService:StorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      request = request.clone({
          withCredentials: true
      })

      return next.handle(request).pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.status == 401) {
            this._router.navigate(['unauthorized'])
            this._storageService.clearProfil()
            return throwError(err)
          } else {
            return throwError(err)
          }
        })
      )
  }
}
