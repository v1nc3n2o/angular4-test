import { Routes, RouterModule } from '@angular/router';

import { HelloWorld } from './hello-world/hello-world.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home',  pathMatch: 'full' },
  { path: 'home', component: UserComponent },
  { path: 'myPage', redirectTo: 'helloWorld' },
  { path: 'helloWorld', component: HelloWorld}
];

export const routing = RouterModule.forRoot(appRoutes);
