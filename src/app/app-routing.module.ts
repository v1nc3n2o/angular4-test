import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { HelloWorld } from './hello-world/hello-world.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users', component: UserComponent },
      { path: 'helloWorld', component: HelloWorld },
      { path: 'user-details', component: UserDetailsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
