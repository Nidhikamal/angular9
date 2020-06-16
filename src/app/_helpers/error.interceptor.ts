import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../_services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService, private location: Location, private router: Router) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status == 401 || err.status == 403 || err.status == 404 || err.status == 500) {
                this.location.replaceState('/'); // clear browser navigation history and reset it to root. /                
                const error = err.error.message || err.statusText;
                this.authenticationService.logout();
                this.router.navigate(['error'], { queryParams: { status: err.status, message: err.error.message } });
                return throwError(error);
            }
        }))
    }
}