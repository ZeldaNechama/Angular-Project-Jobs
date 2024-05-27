import { Component, OnInit } from '@angular/core';
import { job } from '../../Models/Job';
import { JobListService } from '../../Services/job-list.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.scss'
})
export class JobsListComponent implements OnInit {

  viewJobs: job[] = []
  constructor(private jobSvc: JobListService) { 
  }
  ngOnInit(): void {
    this.getJobs()
  }

  getJobs():void{
    this.jobSvc.getJobsList().subscribe(res => this.viewJobs = res)
  }






}
