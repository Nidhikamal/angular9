import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    basic = '';

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    // login(loginPayload) {
        login(username,password) {
        // this.basic = "Basic " + "Y2xpZW50OnNlY3JldA==";
        // let headers = new HttpHeaders({
        //     'Cache-Control': 'no-cache',
        //     'Postman-Token': 'fd168b8f-e8e6-0b0a-6ff2-5402662d8c84',
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //     'Authorization': this.basic });
        // let options = { headers: headers };
        // return this.http.post<any>(environment.api + '/oauth/token', loginPayload,options)

        return this.http.post<any>(environment.apiUrl + '/users/authenticate', { username, password })
    //    return this.http.post<any>(environment.api + '/token/generate-token', loginPayload,)
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