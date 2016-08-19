import {Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES,RouterLinkActive } from '@angular/router';
/**
 * 导入指令
 */
import {CollapseNav} from '../directives/collapseNav';
import {ToggleMinNav} from '../directives/toggleMinNav';
import {ToggleOffCanvas} from '../directives/toggleOffCanvas';
import {SlimScroll} from '../directives/slimScroll';
import {RequirePermissions} from '../directives/requirePermissions';
import {SetHeight} from '../directives/setHeight';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
@Component({
  moduleId: module.id,
  selector: 'menu',
  template: require('./menu.html'),
  directives: [
    ...ROUTER_DIRECTIVES, RouterLinkActive, CollapseNav, ToggleMinNav,ToggleOffCanvas,SlimScroll,RequirePermissions,SetHeight,DROPDOWN_DIRECTIVES
  ]
})
export class MenuCmp implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
  public avatarUrl = require('../../assets/img/angularclass-avatar.png');
  public status:{isopen:boolean} = {isopen: false};
  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

}
