/**
 * 侧边栏
 * Created by chengfei on 16/8/25.
 */
import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, RouterLinkActive} from '@angular/router';
import {MyCollapseNavDirective} from '../../directives/collapseNav.directive';
import {MySlimScrollDirective} from '../../directives/slimScroll.directive';

@Component({
    selector: 'my-sidebar',
    templateUrl: './sidebar.template.html',
    directives: [...ROUTER_DIRECTIVES, RouterLinkActive, MyCollapseNavDirective, MySlimScrollDirective],
    styleUrls: ['./sidebar.style.css']
})
export class Sidebar implements OnInit {
    constructor() {

    }

    ngOnInit() {

    }
}