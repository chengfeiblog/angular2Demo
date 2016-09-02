/**
 * Created by chengfei on 16/8/30.
 */
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LazyLoadComponent } from './lazyLoad.component';
console.log('异步加载测试成功');
export const routes = [
    { path: '', component: LazyLoadComponent, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        LazyLoadComponent
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
