import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { job } from '../Models/Job';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobListService {

  constructor(private http:HttpClient) { }
  getJobsList():Observable<any>{
    return this.http.get('https://localhost:7184/Job')
  }
}
