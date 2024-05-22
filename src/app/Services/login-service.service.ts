import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  login(name:string,password:string):Observable<any>{
    const body={name,password};
    return this.http.post('https://localhost:7184/api/Login',body);
  }
}
