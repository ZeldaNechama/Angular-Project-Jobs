import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'job-search';

  isRegister():boolean{
    const storedUser = localStorage.getItem('userdata');
    return storedUser!=undefined;
  }
}
