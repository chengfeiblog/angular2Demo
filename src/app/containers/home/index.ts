import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Home } from './home.component';
import {HomeService} from './home.service';
console.log('`Home` bundle loaded asynchronously');
export const routes = [
  { path: '', component: Home, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    Home
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [
      HomeService
  ]
})
export default class AboutModule {
  static routes = routes;
}
