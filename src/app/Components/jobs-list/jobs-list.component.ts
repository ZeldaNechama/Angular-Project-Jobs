import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { job } from '../../Models/Job';
import { JobListService } from '../../Services/job-list.service';
import { fields } from '../../Models/fields';
import { user } from '../../Models/user';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {

  filterData: any = { area: '', field: '' }
  filterChanges: EventEmitter<any> = new EventEmitter<any>();
  fields=fields
  user:user={name:'',field:fields.BackEnd,id:1,password:''}

  viewJobs: job[] = []

  constructor(private jobSvc: JobListService) { }

  ngOnInit(): void {
    this.getJobs();
    const storedUser = localStorage.getItem('userdata');
    
    if (storedUser) {
      this.user = JSON.parse(storedUser) as user;
    }   
    this.filterData.field=this.user.field   
    this.filterChanges.emit(this.filterData);  
    this.filterByField(this.user.field)
  }

  getJobs(): void {
    this.jobSvc.getJobsList().subscribe(res => this.viewJobs = res);
  }

  filter(): void {
    this.filterChanges.emit(this.filterData);
    if (this.filterData.area !== '' && this.filterData.field === '') {
      this.filterByArea(this.filterData.area);
    } else if (this.filterData.area === '' && this.filterData.field !== '') {
      this.filterByField(this.filterData.field);
    } else if (this.filterData.area !== '' && this.filterData.field !== '') {
       this.filterByBoth(this.filterData.area, this.filterData.field);
    } 
    else {
      console.log(this.user.field);
      
      this.filterData.field=this.user.field
      console.log(this.filterData);
      
      this.filterChanges.emit(this.filterData); 
      console.log(this.filterData);
      
      this.filterByField(this.user.field)
    }
  }

  filterByArea(area: string): void {
    console.log('filterByArea');
    this.jobSvc.getJobsList().subscribe(jobs => {
      this.viewJobs = this.jobSvc.filterJobsByArea(jobs, area);
    });
  }

  filterByField(field: fields): void {
    console.log('filterByField');
    this.jobSvc.getJobsList().subscribe(jobs => {
      this.viewJobs = this.jobSvc.filterJobsByField(jobs, field);
    });
  }

  filterByBoth(area: string, field: fields): void {
    console.log('filterByBoth');
    this.jobSvc.getJobsList().subscribe(jobs => {
      this.viewJobs = this.jobSvc.filterByBoth(jobs, area, field);
    });
  }
  reset(){
    this.getJobs();
    this.filterData.area='';
    this.filterData.field='';
  }
}
