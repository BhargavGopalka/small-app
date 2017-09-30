import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  details = [];
  numbers = [];
  userFormGroup: FormGroup;
  inserted = false;
  color = '';

  constructor( private fb: FormBuilder) {
    this.numbers = new Array(60).fill(0).map((x,i) => i + 1 );
  }

  assignColor(value){
    this.color = value;
  }

  ngOnInit() {
    this.userFormGroup = this.fb.group({
      fName: [''],
      lName: [''],
      gender: [''],
      age: [''],
      color: ['']
    });
  }

  addToTable(form: any){
    this.inserted = true;
    this.details.push(form.value);
    this.userFormGroup.reset();
  }

}


