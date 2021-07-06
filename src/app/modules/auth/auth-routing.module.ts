import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddIeComponent } from './components/add-ie/add-ie.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { InternExperienceComponent } from './components/intern-experience/intern-experience.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: 'Home', component: HomeComponent },
      { path: 'Login', component: LoginComponent },
      { path: 'About-Us', component: AboutUsComponent },
      { path: 'Contact-Us', component: ContactUsComponent },
      { path: 'Intern-Exp', component: InternExperienceComponent },
      { path: 'Add-IE', component: AddIeComponent }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
