import { Injectable }             from '@angular/core';
import { CanActivate,Router,ActivatedRouteSnapshot, RouterStateSnapshot }    from '@angular/router';
import {LoginService} from './pages/login/services/loginService';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor (
    private loginService : LoginService,
    private router: Router
  ) {}
  canActivate(
    next:  ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
      if (this.loginService.isLoggedIn()) {
        console.log('已登录!');
        return true; }
      console.log('未登录!');
      this.router.navigate(['/login']);
      return false;
  }
}
export const AUTH_PROVIDERS = [AuthGuard];
