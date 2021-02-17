import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/core/models/student';
import { StudentService } from 'src/app/core/services/http/student.service';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students$ : Observable<Student[]>;
  displayedColumns: string[] = ['id','firstName','lastName'];

  constructor(private _studentService : StudentService) { }

  ngOnInit(): void {
    this.students$ = this._studentService.get();
  }

  
}
