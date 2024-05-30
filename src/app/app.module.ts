import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { JobComponent } from './Components/job/job.component';
import { JobsListComponent } from './Components/jobs-list/jobs-list.component';
import { LoginComponent } from './Components/login/login.component';
import { LoginServiceService } from './Services/login-service.service';
import { JobListService } from './Services/job-list.service';
import { ButtonDirective } from './Directives/button.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    JobsListComponent,
    JobComponent,
    PageNotFoundComponent,
    ButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginServiceService,
    JobListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
