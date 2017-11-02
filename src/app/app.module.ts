import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HelloWorld } from './side-menu/side-menu.component';

// Services
import { UserService } from './user/user.service';

// Theme
import { MaterialModule } from './material.module';

// Router
import { routing }from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HelloWorld
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    routing
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
