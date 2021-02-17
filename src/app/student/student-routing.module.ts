import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { StudentComponent } from './student.component';

const routes: Routes = [{  
  path : '',
  component : StudentComponent,
  children: [
    {
    path : 'students',
    pathMatch: 'full',
    redirectTo: 'students'
  },
  {
    path : 'students',
    component : StudentListComponent
  },
  {
    path : '**',
    component : NotFoundComponent
  }
] 
 },
 {
  path : '',
  component : NotFoundComponent 
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
