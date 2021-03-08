import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from './../../../core/models/student';
import { StudentService } from 'src/app/core/services/http/student.service';
import {MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  studentForm: FormGroup;

  classes: string[] = [
    'LP-DIM-FI',
    'LP-DIM-APP'
  ]

  constructor(private fb: FormBuilder, private _studentService : StudentService) { 
    
    this.studentForm = this.fb.group({
      firstName: ['', [Validators.required, this.noWhitespaceValidator]],
      lastName: ['', [Validators.required, this.noWhitespaceValidator]],
      birthYear: ['', [Validators.required, this.noWhitespaceValidator]],
      class: ['', [Validators.required, this.noWhitespaceValidator]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(student : Student){
    console.log("FORMULAIRE", student);

    if(this.studentForm.valid){
      this._studentService.post(student).subscribe((next) => {
        console.log("YYASS GIRL, WE DID THAT");
        this.studentForm.reset();
      })
    }
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;

    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

}
