import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './applications/applications.component';
import { BodyComponent } from './landing/body/body.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ProfileComponent } from './profile/profile.component';
import { Application } from './models/application';
import { SingupComponent } from './forms/singup/singup.component';
import { LoginComponent } from './forms/login/login.component';
import { AgentListComponent } from './agents/agent-list/agent-list.component';


const routes: Routes = [
  {path:"home",component:BodyComponent},
  {path:"jobs",component:ApplicationsComponent},
  {path:"jobDetails",component:JobDetailsComponent},
  {path:"profile",component:ProfileComponent},
  {path:"freeAgents",component:AgentListComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SingupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
