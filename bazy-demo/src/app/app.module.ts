import {BrowserModule} from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsersListComponent} from './components/users-list/users-list.component';
import {HttpClientModule} from '@angular/common/http';
import {AddUserComponent} from './components/add-user/add-user.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {Subject} from 'rxjs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {EditUserComponent} from './components/edit-user/edit-user.component';
import {CarouseleComponent} from './components/carousele/carousele.component';
import {MatCarouselModule} from '@ngbmodule/material-carousel';
import {MatMenuModule} from '@angular/material/menu';
import {GameComponent} from './components/game/game.component';
import {BoardComponent} from './components/game/ticTacToe/board/board.component';
import {SquareComponent} from './components/game/ticTacToe/square/square.component';
import {HomeComponent} from './components/home/home.component';
import {MatExpansionModule} from '@angular/material/expansion';

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();
  firstPageLabel = `Pierwsz strona`;
  itemsPerPageLabel = `Liczba elementów na stronie :`;
  lastPageLabel = `Ostatnia strona`;
  nextPageLabel = 'Następna strona';
  previousPageLabel = 'Poprzednia strona';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return `Strona 1 z 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Strona ${page + 1} z ${amountPages}`;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    AddUserComponent,
    NavbarComponent,
    EditUserComponent,
    CarouseleComponent,
    GameComponent,
    BoardComponent,
    SquareComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatCarouselModule.forRoot(),
    MatMenuModule,
    MatExpansionModule
  ],
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
