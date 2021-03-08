import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../../models/student';


@Injectable()
export class StudentService {

  endPoint: string = environment.StudentEndpoint;

  constructor(private _httpClient: HttpClient) { }

  get(): Observable<Student[]> {
    return this._httpClient.get<Student[]>(this.endPoint);
  }

  post(student: Student): Observable<Student> {
    return this._httpClient.post<Student>(this.endPoint, student);
  }
}
