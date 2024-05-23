import { Component, Input, OnInit } from '@angular/core';
import { user } from '../../Models/user';
import { fields } from '../../Models/fields';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

  // @Input()
  _user: user = { id: 1, name: "", password: "", field: fields.BackEnd }

  ngOnInit(): void {
    const storedUser = localStorage.getItem('userdata');
    if (storedUser) {
      this._user = JSON.parse(storedUser) as user;
    }
  }



}
