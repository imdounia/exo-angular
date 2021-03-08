import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { SharedModule } from '../shared/shared.module';
import { StudentFormComponent } from './components/student-form/student-form.component';


@NgModule({
  declarations: [StudentComponent, StudentListComponent, StudentFormComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
