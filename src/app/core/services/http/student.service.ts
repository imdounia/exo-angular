import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../../models/student';


@Injectable()
export class StudentService {

  constructor(private _httpClient: HttpClient) { }

  get(): Observable<Student[]> {
    return this._httpClient.get<Student[]>("http://localhost:3000/students");
  }
}
