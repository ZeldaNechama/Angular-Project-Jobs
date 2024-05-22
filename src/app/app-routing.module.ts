import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { LoginComponent } from './Components/login/login.component';
import { JobsListComponent } from './Components/jobs-list/jobs-list.component';
import { JobComponent } from './Components/job/job.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';



const routes: Routes = [
  { path: '', component:MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'job-list', component: JobsListComponent, children:
      [ { path: 'job', component: JobComponent }]
  },
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
