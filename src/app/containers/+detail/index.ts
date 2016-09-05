import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// 导入页面
import { Detail } from './detail.component';
import { Home } from '../home/home.component';
import { About } from '../about';
// 导入组件
import {Loading} from '../../components/loading/loading.component';
import {Navbar} from '../../components/navbar/navbar.component';
import {Sidebar} from '../../components/sidebar/sidebar.component';

import {MyToggleMinNavDirecive} from '../../components/navbar/toggleMinNav.directive';
import {MyCollapseNavDirective} from '../../components/sidebar/collapseNav.directive';
import {MySlimScrollDirective} from '../../components/sidebar/slimScroll.directive';

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
    MyToggleMinNavDirecive,
    MyCollapseNavDirective,
    MySlimScrollDirective,
    Loading,
    Navbar,
    Sidebar,
    Home,
    About,
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
