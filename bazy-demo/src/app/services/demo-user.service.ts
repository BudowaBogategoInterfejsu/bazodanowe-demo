import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DemoUser} from '../dto/DemoUser';

@Injectable({
  providedIn: 'root'
})
export class DemoUserService {

  constructor(private http: HttpClient ) { }

  getUsers(): Observable<DemoUser[]> {
    return this.http.get<DemoUser[]>(`http://localhost:8080/restApi/demoUser/list`);
  }

}
