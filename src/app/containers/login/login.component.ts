/**
 * Created by chengfei on 16/8/30.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector: 'login',
    templateUrl: 'login.template.html',
    styleUrls: ['./login.style.css']
})
export class LoginComponent implements OnInit {
    constructor(public router:Router) {
    }

    ngOnInit() {
    }

    goToDetail():void {
        // this.router.navigate([`/user/${loginname}`]);
        // this.router.navigate(['/user', loginname]);
        this.router.navigate(['/dashboard']);
    }

}