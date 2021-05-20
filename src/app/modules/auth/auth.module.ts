import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingComponent } from './components/landing/landing.component';
import { MaterialModule } from 'src/app/material.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactUsComponent } from './components/contact-us/contact-us.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FontAwesomeModule
  ]
})
export class AuthModule { }
