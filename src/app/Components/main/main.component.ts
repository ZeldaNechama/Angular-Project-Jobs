import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { user } from '../../Models/user';
import { fields } from '../../Models/fields';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

  // @Input()
  _user: user = { id: 1, name: "", password: "", field: fields.BackEnd };
  count:number=0;
  fields=fields;
  fieldInfo:any;
  filterChanges: EventEmitter<any> = new EventEmitter<any>();

  filter(){
    this.filterChanges.emit(this.fieldInfo);
    localStorage.setItem('fieldFilter',this.fieldInfo.toString())
  }

  ngOnInit(): void {
    const storedUser = localStorage.getItem('userdata');
    
    if (storedUser) {
      this._user = JSON.parse(storedUser) as user;
    }
    const c=localStorage.getItem('countResume');
    if(c){
      this.count=JSON.parse(c)
    }
  }

  isRegister():boolean{
    const storedUser = localStorage.getItem('userdata');
    return storedUser!=undefined;
  }



}
