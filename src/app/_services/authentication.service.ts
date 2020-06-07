﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(loginPayload) {
        return this.http.post<any>(environment.api + '/token/generate-token', loginPayload,)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshe
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }
    getAllUsers(): Observable<any[]> {
        return this.http.get<any>(environment.api + '/users' );
      }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    refreshToken(token)  {
        return this.http.post(environment.api+ '/token/refresh-token', token,
        ).pipe(map(data => {
        return data;
        }));
        }
    
}