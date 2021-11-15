import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersListComponent} from './components/users-list/users-list.component';
import {AddUserComponent} from './components/add-user/add-user.component';
import {EditUserComponent} from './components/edit-user/edit-user.component';
import {CarouseleComponent} from './components/carousele/carousele.component';
import {GameComponent} from './components/game/game.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {path: 'list', component: UsersListComponent},
  {path: 'add', component: AddUserComponent},
  {path: 'edit/:id', component: EditUserComponent},
  {path: 'carousel', component: CarouseleComponent},
  {path: 'game', component: GameComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
