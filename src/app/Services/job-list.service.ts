import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { job } from '../Models/Job';
import { Observable } from 'rxjs';
import { fields } from '../Models/fields';

@Injectable({
  providedIn: 'root'
})
export class JobListService {

  constructor(private http: HttpClient) { }
  getJobsList(): Observable<any> {
    return this.http.get('https://localhost:7184/Job')
  }
  filterJobsByArea(jobs: job[], area: string): job[] {
    return jobs.filter(j => j.area === area);
  }
  filterJobsByField(jobs: job[], field: fields): job[] {
    return jobs.filter(j => j.field == field)

  }
  filterByBoth(jobs: job[], area: string, field: fields): job[] {
    console.log('in filter service both');
    debugger
    return jobs.filter(j => j.area === area && j.field === field);

  }

}
