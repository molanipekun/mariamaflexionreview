import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {TeacherRequest} from '../pages/models/teacher-request';

@Injectable()
export class ConversionService {
  // private baseUrl = !isDevMode() ? "http://demoebsga-env.eba-b28bc2gd.us-east-1.elasticbeanstalk.com/api/v1/" : "http://localhost:8056/unit-conversion";
  private baseUrl = 'http://localhost:8056/unit-conversion/convert/temperature';

  constructor(private http: HttpClient) {}

  isValid(payload: TeacherRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}`, payload).pipe(
      map(res => res)
    );
  }

}
