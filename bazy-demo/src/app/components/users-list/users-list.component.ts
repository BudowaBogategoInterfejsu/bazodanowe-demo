/* tslint:disable:typedef */
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {DemoUser} from '../../dto/DemoUser';
import {DemoUserService} from '../../services/demo-user.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'surname', 'name', 'email', 'age', 'gender', 'actions'];
  demoUsers: DemoUser[] = [];

  dataSource = new MatTableDataSource<DemoUser>();

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private demoUserService: DemoUserService,
              private snackBar: MatSnackBar
  ) {}

  ngAfterViewInit(): void {
    this.demoUserService.getUsers().subscribe(demoUsers => {
      this.demoUsers = demoUsers;
      this.dataSource = new MatTableDataSource<DemoUser>(demoUsers);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editUser(id: any) {

  }

  deleteUser(id: any) {
    this.demoUserService.deleteUser(id).subscribe(response => {
      this.snackBar.open('Użytkownik został usunięty', 'Zamknij', {duration: 5000});
      this.demoUserService.getUsers().subscribe(demoUsers => {
        this.demoUsers = demoUsers;
        this.dataSource = new MatTableDataSource<DemoUser>(demoUsers);
        this.dataSource.paginator = this.paginator;
      });
    });
  }
}


