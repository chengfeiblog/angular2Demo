/**
 * 路由配置表
 * Created by chengfei on 16/8/25.
 */
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { NoContent } from './containers/no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: LoginComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'detail', loadChildren: () => require('es6-promise-loader!./containers/+detail')('default')},
  { path: 'lazyLoad', loadChildren: () => require('es6-promise-loader!./containers/testLazyLoad')('default')},
  { path: '**',    component: NoContent },
];
