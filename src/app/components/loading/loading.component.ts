/**
 * Created by chengfei on 16/8/26.
 * loading
 */
import {Component, OnInit, Input, SimpleChange} from '@angular/core';

@Component({
    selector: 'loading',
    template: `
        <div class="loading" *ngIf="showLoading">
            <span class="dots-loader">Loading…</span>
        </div>  
    `,
    styleUrls: ['./loading.style.css']
})
export class Loading implements OnInit {
    @Input() showLoading:boolean;

    constructor() {
    }

    ngOnInit() {
    }
    ngOnChanges(changes:{[showLoading:string]:SimpleChange}) {
        console.log('检测状态变化loading' + JSON.stringify(changes));
    }

}