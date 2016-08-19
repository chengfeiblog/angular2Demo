import {Component,OnInit} from '@angular/core';
import { NgForm }    from '@angular/common';
import {Router} from '@angular/router';
@Component({
	selector : 'login',
	template : require('./login.html')
})

export class LoginCmp {
  public loading : boolean = true;
  public logo = require('../../../../assets/img/logo.png');
  public qrcode = require('../../../../assets/img/qrcode.png');
  public active: boolean = true;
  public userInfo = {};
	constructor( private _router: Router) {}
	gotoDashboard() {
		this._router.navigate(['/menu']);
	}
	gotoSignup() {
		this._router.navigate(['Signup']);
	}
  ngOnInit() {
    this.loading = false;
  }
}
