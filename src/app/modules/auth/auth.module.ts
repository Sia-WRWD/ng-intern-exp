import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { MaterialModule } from 'src/app/material.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InternExperienceComponent } from './components/intern-experience/intern-experience.component';
import { AddIeComponent } from './components/add-ie/add-ie.component';

@NgModule({
  declarations: [
    LoginComponent,
    LandingComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    InternExperienceComponent,
    AddIeComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
  ]
})
export class AuthModule { }
