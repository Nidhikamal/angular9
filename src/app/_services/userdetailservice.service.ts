import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders(
    {
      //Resolve Cross Origin Error
      'Content-Type': 'application/json'     
    }
  )
};

//Access anywhere in this application
@Injectable({
  providedIn: 'root'
})
export class UserdetailserviceService {

  private REST_API_SERVER = "http://localhost:8080/findusers";

  //Create object for HTTP client
  constructor(private http: HttpClient) { }

  //Call API
  public sendGetRequest(){
    //return this.http.post(this.REST_API_SERVER,{},httpOptions)  
    return this.http.get(this.REST_API_SERVER,httpOptions);
  }
}
