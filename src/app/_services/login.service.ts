import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(loginPayload) {
  console.log(loginPayload);
    return this.http.post(environment.api + '/token/generate-token', loginPayload,
     ).pipe(map(data => {
       console.log('===data===' + JSON.stringify(data));
       return data;
     }));
   }
}
