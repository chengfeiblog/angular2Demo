import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Detail } from './detail.component';
import { Home } from '../home/home.component';
import { About } from '../about';

export const routes = [
  { path: '', component: Detail,
    children: [
      { path: '', component: Home },  // 必须包括
      { path: 'home', component: Home },  // 必须包括
      { path: 'about', component: About },  // 必须包括
    ]},
];

@NgModule({
  declarations: [
    Home,
    About,
    Detail
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class AboutModule {
  static routes = routes;
}
