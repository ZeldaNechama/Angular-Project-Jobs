import { Component, Input, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import { LoginServiceService } from '../../Services/login-service.service';
import { user } from '../../Models/user';
import { fields } from '../../Models/fields';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('f') f: NgForm | null = null;

  userInfo: any = { password: '', name: '' };

  //@Input()
  userData: user = { id: 1, name: "chaim", password: "bscsj213", field: fields.BackEnd };

  constructor(private loginSvc: LoginServiceService) {}

  saveData(): void {
    localStorage.setItem('id', this.userData.id.toString());
  }

 
  onsubmit(): void {
    if (this.f) {
      console.log('name'+this.userInfo.name,'password:'+ this.userInfo.password);
      alert('in sumbit')
      this.loginSvc.login(this.userInfo.name, this.userInfo.password)?.subscribe(res => {
        this.userData = res;
        this.saveData();
      }, error => {
        console.error('Login failed', error);
      });
    }
  }
}
