import {Component, OnInit} from '@angular/core';
import {DemoUser} from '../../dto/DemoUser';
import {DemoUserService} from '../../services/demo-user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  constructor(private demoUserService: DemoUserService) {
  }

  ngOnInit(): void {
  }

  addUser(name: string, email: string) {
    const newUser = new DemoUser();
    newUser.name = name;
    newUser.email = email;

    this.demoUserService.addUser(newUser).subscribe(value => {
      console.log('User added');
    }, error => {
      if (error.status === 409) {
        console.log('User exist');
      }
    });
  }
}
