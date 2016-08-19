/**
 * 导入组件
 */
import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
import { HomeCmp } from './pages/home/components/home';
import {MenuCmp}   from './menu/menu.component';
import {LoginCmp} from './pages/login/components/login';
import { DataResolver } from './app.resolver';
import { PageNotFoundCmp } from './pages/404/components/404';
/**
 *导入权限
 */
import {AuthGuard} from './auth.guard';
import {CanDeactivateGuard} from './canDeactivate';
export const routes: RouterConfig = [
  { path: '',      redirectTo : '/login',pathMatch: 'full'},
  { path: 'login',      component: LoginCmp},
  //必须与你定义的配套
  { path: 'about', component: 'About',
    resolve: {
      'yourData': DataResolver
    }},
  { path: 'menu', component: MenuCmp,
    canActivate: [ WebpackAsyncRoute,AuthGuard],
    children: [
      { path: '', component: HomeCmp },  // 必须包括
      { path: 'home', component: HomeCmp },  // 必须包括
      { path: 'salesReports', component: 'SalesReportsCmp',
        canDeactivate: [CanDeactivateGuard]
      },  // 必须包括
    ]},
  { path: '**',    component: PageNotFoundCmp },
];


export const asyncRoutes: AsyncRoutes = {
  'SalesReportsCmp': require('es6-promise-loader!./pages/salesReports'),
};

/**
 * 控制初始化时异步加载组件
 * @type {Es6PromiseLoader|Function|FactoryEs6PromiseLoader|FactoryPromise[]}
 */
export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
  asyncRoutes['SalesReportsCmp'],
];

