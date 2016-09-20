import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Detail } from './detail.component';

console.log('`Detail` bundle loaded asynchronously');
export const routes = [
  { path: '', component: Detail, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    Detail
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class AboutModule {
  static routes = routes;
}
