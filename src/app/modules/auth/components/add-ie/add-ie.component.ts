import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddIEService } from 'src/app/services/add-ie.service';
import { DelIeService } from 'src/app/services/del-ie.service';
import { UpIeService } from 'src/app/services/up-ie.service';
import { addIE } from 'src/app/shared/addIE';

@Component({
  selector: 'app-add-ie',
  templateUrl: './add-ie.component.html',
  styleUrls: ['./add-ie.component.scss']
})
export class AddIeComponent implements OnInit {

  addIeForm: FormGroup;
  addIeModel = new addIE();  

  constructor(
    private fb: FormBuilder,
    private _addIeService: AddIEService,
    private _upIeService: UpIeService,
    private _delIeService: DelIeService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initializeAddIeForm();
  }

//Initialize Form
initializeAddIeForm():void {
  this.addIeForm = this.fb.group ({
    username: ['', [Validators.required]],
    company: ['', [Validators.required]],
    duration: ['', [Validators.required]],
    experience: ['', [Validators.required]]
  })
}

//Add Intern Exp Details
addInternExp(): void {
  console.log(this.addIeForm);
  for (const i in this.addIeForm.controls) {
    this.addIeForm.controls[i].markAsDirty();
    this.addIeForm.controls[i].updateValueAndValidity();
  }
  this._addIeService.share(this.addIeModel)
    .subscribe(
      data => {
        console.log('Success', data),
        alert("Successfully Shared Your Internship Experience!"),
        this.router.navigate(['/Intern-Exp']);
      },
      error => {
        console.log(error);

        if(error.status === 400) {
          alert('Something Went Wrong, Please Try Again Later!');
        }
      }
    )
}

//Update Intern Exp Details
upInternExp(): void {
  console.log(this.addIeForm);
  for (const i in this.addIeForm.controls) {
    this.addIeForm.controls[i].markAsDirty();
    this.addIeForm.controls[i].updateValueAndValidity();
  }
  this._upIeService.update(this.addIeModel)
    .subscribe(
      data => {
        console.log('Success', data),
        alert("Successfully Updated Your Internship Experience!"),
        this.router.navigate(['/Intern-Exp']);
      },
      error => {
        console.log(error);

        if(error.status === 400) {
          alert('Something Went Wrong, Please Try Again Later!');
        }
      }
    )
}

//Delete Intern Exp Details
delInternExp(): void {
  console.log(this.addIeForm);
  for (const i in this.addIeForm.controls) {
    this.addIeForm.controls[i].markAsDirty();
    this.addIeForm.controls[i].updateValueAndValidity();
  }
  this._delIeService.delete(this.addIeModel)
    .subscribe(
      data => {
        console.log('Success', data),
        alert("Successfully Deleted Your Internship Experience!"),
        this.router.navigate(['/Intern-Exp']);
      },
      error => {
        console.log(error);

        if(error.status === 400) {
          alert('Something Went Wrong, Please Try Again Later!');
        }
      }
    )
}

//Internship Duration
  months = [
    {name: "1"},
    {name: "2"},
    {name: "3"},
    {name: "4"},
    {name: "5"},
    {name: "6"},
    {name: "7"},
    {name: "8"},
    {name: "9"},
    {name: "10"},
    {name: "11"},
    {name: "12"}
  ]
}
