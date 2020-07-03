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

@Injectable({
  providedIn: 'root'
})
export class FormControlsService {

  private REST_API_SERVER = "http://localhost:8080/v1/addUser";

  //Create object for HTTP client
  constructor(private http: HttpClient) { }

  //Call API
  public sendGetRequest(fd:any){
    return this.http.post(this.REST_API_SERVER,fd,httpOptions);  
    //return this.http.get(this.REST_API_SERVER,httpOptions);
  }
}
