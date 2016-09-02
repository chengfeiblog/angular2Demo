/**
 * 顶部
 * Created by chengfei on 16/8/25.
 */
import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, RouterLinkActive} from '@angular/router';
import {MyToggleMinNavDirecive} from '../../directives/toggleMinNav.directive';

@Component({
    selector: 'my-navbar',
    templateUrl: './navbar.template.html',
    directives: [...ROUTER_DIRECTIVES, RouterLinkActive, MyToggleMinNavDirecive],
    styleUrls: ['./navbar.style.css']
})
export class Navbar implements OnInit {
    constructor() {

    }

    ngOnInit() {
    }
}