import {Component} from '@angular/core';
import {AppState} from '../../app.service';
import {HomeService} from './home.service';
import * as $ from 'jquery';
@Component({
    selector: 'home',
    styleUrls: ['./home.style.css'],
    templateUrl: './home.template.html'
})
export class Home {
    loading: string = 'false';
    constructor(public appState:AppState,
    public homeService : HomeService) {

    }

    ngOnInit() {
        var selector = '.sample-content';
        console.log('jquery', $(selector).text());
    }

    changeState() {
        var self = this;
        self.appState.set('loading',true);
        self.loading = 'true';
        setTimeout(() => {
            self.appState.set('loading', false);
            self.loading = 'false';
        },2000);
    }

}
