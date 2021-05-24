import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
import { loginDetails } from 'src/app/shared/login';
import { registrationDetails } from 'src/app/shared/registration';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registrationForm: FormGroup;
  loginForm: FormGroup;
  submitted = false;

  registrationModel = new registrationDetails();
  loginModel = new loginDetails();



  constructor(private fb: FormBuilder, private _registrationService: RegistrationService, private router: Router) { }

  ngOnInit(): void {
    this.initializeRegistrationForm();
    this.initializeLoginForm();
  }

  //Registration
  initializeRegistrationForm(): void {
    this.registrationForm = this.fb.group ({
      reg_username: '',
      reg_name: '',
      reg_email: '',
      reg_password: '',
      reg_re_password: ''
    });
  }

  onRegistrationSubmit():void {
    console.log(this.registrationForm);
    this.submitted = true;
    this._registrationService.enroll(this.registrationModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.log('Failed!', error)
      )
      this.router.navigate(['/Home']);
  } 


  //Login
  initializeLoginForm(): void {
    this.loginForm = this.fb.group ({
      log_username: '',
      log_password: ''
    });
  }

  onLoginSubmit(): void {
    console.log(this.loginForm);
    this.submitted = true;
  }
}
