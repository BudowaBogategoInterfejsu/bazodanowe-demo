/* tslint:disable:typedef */
import {Component, OnInit} from '@angular/core';
import {DemoUser} from '../../dto/DemoUser';
import {DemoUserService} from '../../services/demo-user.service';
import {FormBuilder, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  form;

  constructor(private demoUserService: DemoUserService,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      surname: [null, Validators.required],
      email: [null, Validators.required],
      age: [null, Validators.required],
      gender: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const newUser = new DemoUser();
      newUser.name = this.form.controls.name.value;
      newUser.surname = this.form.controls.surname.value;
      newUser.email = this.form.controls.email.value;
      newUser.age = this.form.controls.age.value;
      newUser.gender = this.form.controls.gender.value;

      this.demoUserService.addUser(newUser).subscribe(value => {
        this.snackBar.open('Użytkownik dodany', 'Zamknij', {duration: 5000});
      }, error => {
        if (error.status === 409) {
          this.snackBar.open('Użytkownik o podanym adresie email już istnieje', 'Zamknij', {
            duration: 5000,
            panelClass: ['red-snackbar'],
          });
        }
      });
    } else {
      this.snackBar.open('Popraw formularz', 'Zamknij', {
        duration: 5000,
        panelClass: ['red-snackbar'],
      });
    }
  }
}
