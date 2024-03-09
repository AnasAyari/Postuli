import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './landing/header/header.component';
import { BodyComponent } from './landing/body/body.component';
import { FooterComponent } from './landing/footer/footer.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './forms/login/login.component';
import { SingupComponent } from './forms/singup/singup.component';
import { ProfileComponent } from './profile/profile.component';
import { SingleApplicationComponent } from './single-application/single-application.component';
import { AgentListComponent } from './agents/agent-list/agent-list.component';
import { AgentComponent } from './agents/agent/agent.component';
import { ChatComponent } from './chat/chat.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
    SingupComponent,
    ProfileComponent,
    ApplicationsComponent,
    SingleApplicationComponent,
    AgentListComponent,
    AgentComponent,
    ChatComponent,
    JobDetailsComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

