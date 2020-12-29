import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sample-invite';

  form: FormGroup;
  submitted: boolean = false;

  constructor( private fb: FormBuilder, private location: Location) {

    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      role: ['admin', Validators.required]
    })

  }
  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    if(this.form.valid) {
      const url = '/firstName='+this.form.controls.firstName.value+'/lastName='+this.form.controls.lastName.value+'/email='+this.form.controls.email.value+'/role='+this.form.controls.role.value;
    this.location.go(url);
    } else{
      
    }
  }


}
