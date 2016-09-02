/*
 * 装饰指令 和 service
 */
import {Component, ViewEncapsulation} from '@angular/core';

import {AppState} from './app.service';
/*
 * 最顶层的组件
 */
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './app.style.css'
    ],
    template: `<router-outlet></router-outlet>`
})
export class App {
    constructor() {

    }
}
