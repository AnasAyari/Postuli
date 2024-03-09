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
import { SingleApplicationComponent } from './single-application/single-application.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
    SingupComponent,
    ApplicationsComponent,
    SingleApplicationComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
