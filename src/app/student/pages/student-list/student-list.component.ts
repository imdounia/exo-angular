import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/core/models/student';
import { StudentService } from 'src/app/core/services/http/student.service';
import {MatTableModule} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { StudentFormComponent } from '../../components/student-form/student-form.component';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students$ : Observable<Student[]>;
  displayedColumns: string[] = ['id','firstName','lastName','birthYear', 'class'];

  constructor(private _studentService : StudentService, public dialog : MatDialog) { }

  ngOnInit(): void {
    this.students$ = this._studentService.get();
  }

  loadData(){
    this.students$ = this._studentService.get();
  }

  openDialog(){
    console.log("open form");

    const dialogRef = this.dialog.open(StudentFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.loadData();
    });
  }

  
}
