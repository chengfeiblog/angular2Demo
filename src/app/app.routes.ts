import {Routes, RouterModule} from '@angular/router';
import {NoContent} from './containers/no-content';
import {LoginComponent} from './containers/login/login.component';
import {DashboardComponent} from './containers/dashboard/dashboard.component';
import {About} from './containers/about';
import {DataResolver} from './app.resolver';


export const ROUTES:Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            {path: '', loadChildren: () => System.import('./containers/home')},
            {path: 'home', loadChildren: () => System.import('./containers/home')},
            {path: 'detail', loadChildren: () => System.import('./containers/+detail')},
            {path: 'about', component: About},
        ]
    },
    {path: '**', component: NoContent},
];
