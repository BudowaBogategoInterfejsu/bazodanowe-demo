import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users = ['user 1', 'user 2', 'user 3', 'user 4', 'user 5'];
  constructor() { }

  ngOnInit(): void {
  }

}
