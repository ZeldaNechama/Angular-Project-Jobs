import { Component, Input } from '@angular/core';
import { job } from '../../Models/Job';
import { fields } from '../../Models/fields';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {

  @Input()
  jobData:job|null=null

  show:boolean=false

  count:number=0

  countResume():void{
    this.count++;
    localStorage.setItem('countResume',this.count.toString());

  }


  getField(){
    return fields;
  }
  showDeatiles():void{
    console.log('inhcgfdg');
    
    this.show=true

  }
 
}
