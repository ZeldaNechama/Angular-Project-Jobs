// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { MainComponent } from './Components/main/main.component';
// import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
// import { JobComponent } from './Components/job/job.component';
// import { JobsListComponent } from './Components/jobs-list/jobs-list.component';
// import { LoginComponent } from './Components/login/login.component';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { LoginServiceService } from './Services/login-service.service';
// @NgModule({
//   declarations: [
//     AppComponent,
//     MainComponent,
//     LoginComponent,
//     JobsListComponent,
//     JobComponent,
//     PageNotFoundComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     HttpClientModule
//   ],
//   providers: [
//     LoginServiceService
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    JobsListComponent,
    JobComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
