import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector: 'login',
	template: require('./signup.html')
})

export class SignupCmp {
  public loading: boolean = true;
  public logoUrl = require('../../../../assets/img/logo.png');
	constructor( private _router: Router) {}
	gotoLogin() {
		this._router.navigate(['/login']);
	}
	gotoDashboard() {
		this._router.navigate(['/menu']);
	}
  ngOnInit() {
    this.loading = false;
  }
}
