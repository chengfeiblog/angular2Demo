import {Component} from '@angular/core';
import {AppState} from '../../app.service';
import * as $ from 'jquery';
@Component({
    selector: 'home',
    pipes: [],
    styleUrls: ['./home.style.css'],
    templateUrl: './home.template.html'
})
export class Home {
    localState = {value: ''};

    constructor(public appState:AppState) {

    }

    ngOnInit() {
        var selector = '.sample-content';
        console.log('jquery', $(selector).text());
    }

    submitState(value) {
        console.log('submitState', value);
        this.appState.set('value', value);
        this.appState.set('loading',true);
        this.localState.value = '';
    }

}
