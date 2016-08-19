/**
 * 权限验证指令
 */
import {LoginService} from '../pages/login/services/loginService';
import {
  Attribute,
  Directive,
  ElementRef,
  Input,
  Optional,
  Query,
  QueryList,
  Renderer
} from '@angular/core';
@Directive({
  selector: '[require-permissions]',
  providers: [LoginService]
})
export class RequirePermissions{
  private permissionsAttr : string;
  private permissions : string[];
  private ele: HTMLElement ;
  constructor(
    public loginService : LoginService,
    public element: ElementRef,
    public renderer: Renderer,
    @Optional() @Attribute('require-permissions') permissionsAttr: string){
    this.permissionsAttr = permissionsAttr;
    this.ele = element.nativeElement;
    this.permissions = this.permissionsAttr.split("|");
  }
  ngOnInit() {
    this.checkPermissions();
  }
  checkPermissions(): void{
    let flag:boolean = true;
    for(let i = 0; i<this.permissions.length;i++) {
      if(this.loginService.hasPermissions(this.permissions[i])){
        flag = false;
        break;
      }
    }
    if(flag) {
      this.ele.parentNode.removeChild(this.ele);
    }
  }
}

