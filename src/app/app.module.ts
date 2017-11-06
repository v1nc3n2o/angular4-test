import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HelloWorld } from './hello-world/hello-world.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ConfirmDeleteDialogComponent, UserComponent } from './user/user.component';

// Services
import { UserService } from './user/user.service';

// Theme
import { MaterialModule } from './material.module';

import {MatTableModule, MatSortModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HelloWorld,
    LoginComponent,
    DashboardComponent,
    UserRegistrationComponent,
    ConfirmDeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
