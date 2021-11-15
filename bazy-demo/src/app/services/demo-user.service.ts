/* tslint:disable:typedef */
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

  addUser(demoUser: DemoUser) {
    return this.http.post(`http://localhost:8080/restApi/demoUser/add`, demoUser);
  }

  updateUser(demoUser: DemoUser) {
    return this.http.patch(`http://localhost:8080/restApi/demoUser/update`, demoUser);
  }

  deleteUser(userId: string) {
    return this.http.delete(`http://localhost:8080/restApi/demoUser/delete/${userId}`);
  }

  getUser(userId: string): Observable<DemoUser> {
    return this.http.get<DemoUser>(`http://localhost:8080/restApi/demoUser/${userId}`);
  }

}
