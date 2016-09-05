import { Routes, RouterModule } from '@angular/router';
import { NoContent } from './containers/no-content';
import { LoginComponent } from './containers/login/login.component';
import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: LoginComponent },
  { path: 'login',      component: LoginComponent },
  {
    path: 'detail', loadChildren: () => System.import('./containers/+detail')
  },
  { path: '**',    component: NoContent },
];
