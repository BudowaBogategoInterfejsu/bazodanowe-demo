import { Component, OnInit } from '@angular/core';
import {DemoUser} from '../../dto/DemoUser';
import {DemoUserService} from '../../services/demo-user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  demoUsers: DemoUser[] = [];

  constructor(private demoUserService: DemoUserService) { }

  ngOnInit(): void {
    this.demoUserService.getUsers().subscribe( demoUsers => {
      this.demoUsers = demoUsers;
    });
  }

}
