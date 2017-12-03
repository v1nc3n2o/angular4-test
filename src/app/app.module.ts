import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { ConfirmDeleteDialogComponent, UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

// Services
import { UserService } from './user/user.service';

// Theme
import { MaterialModule } from './material.module';

import {MatTableModule, MatSortModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ConfirmDeleteDialogComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDeleteDialogComponent]
})
export class AppModule { }
