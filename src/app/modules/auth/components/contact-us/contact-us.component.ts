import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/contact.service';
import { contactDetails } from 'src/app/shared/contact';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  submitted = false;

  contactModel = new contactDetails();
  
  constructor(private fb: FormBuilder, private _contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.contactForm = this.fb.group({
      name: '',
      email: '',
      comment: ''
    });
  }

  onSubmit():void {
    console.log(this.contactForm);
    this.submitted = true;
    this._contactService.enroll(this.contactModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.log('Failed!', error)
      )
      this.router.navigate(['Home']);
  }

}
