import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  login(name:string,password:string):Observable<any>{
    const params = new HttpParams()
    .set('name', name)
    .set('password', password);
    return this.http.get('https://localhost:7184/api/Login',{params});
  }
}
