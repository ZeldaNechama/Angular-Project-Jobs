import { Component, Input, Output } from '@angular/core';
import { job } from '../../Models/Job';
import { fields } from '../../Models/fields';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {

  @Input()
  jobData: job | null = null

  show: boolean = false
  // @Output()
  static count: number = 0

  countResume(): void {
   JobComponent.count++;
    localStorage.setItem('countResume', JobComponent.count.toString());
    alert('you just sent your resume to this job ,Good Luck!!')

  }


  getField() {
    return fields;
  }
  showDeatiles(): void {
    console.log('inhcgfdg');

    this.show = !this.show

  }

}
