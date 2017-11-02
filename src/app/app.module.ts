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
import { RouterModule }   from '@angular/router';

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
    RouterModule.forRoot([
      {
        path: 'helloWorld',
        component: HelloWorld
      }
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
