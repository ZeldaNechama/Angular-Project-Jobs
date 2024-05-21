import { Component,Input } from '@angular/core';
import { user } from '../../Models/user';
import { fields } from '../../Models/fields';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  
  // @Input()
  user:user={id:1,name:"chaim",password:"bscsj213",field:fields.BackEnd}

}
