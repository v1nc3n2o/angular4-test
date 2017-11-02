import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { ConfirmDeleteDialog, UserComponent } from './user/user.component';

// Services
import { UserService } from './user/user.service';

// Theme
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ConfirmDeleteDialog
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDeleteDialog]
})
export class AppModule { }
