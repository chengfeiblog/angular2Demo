import { Component, ViewEncapsulation,ViewContainerRef } from '@angular/core';

import { AppState } from './app.service';

/*
 * 根组件
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `
      <router-outlet></router-outlet>
  `
})
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public viewContainerRef:ViewContainerRef,
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
