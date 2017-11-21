import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HelloWorld } from './hello-world/hello-world.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { ConfirmDeleteDialogComponent, UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

// Services
import { UserService } from './user/user.service';

// Theme
import { MaterialModule } from './module/material.module';

import {MatTableModule, MatSortModule} from '@angular/material';
import { EmailValidatorDirective } from './validator/email-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HelloWorld,
    LoginComponent,
    DashboardComponent,
    UserRegistrationComponent,
    ConfirmDeleteDialogComponent,
    UserDetailsComponent,
    EmailValidatorDirective
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
