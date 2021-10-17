import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersListComponent} from './components/users-list/users-list.component';
import {AddUserComponent} from './components/add-user/add-user.component';

const routes: Routes = [
  {path: 'list', component: UsersListComponent},
  {path: 'add', component: AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
