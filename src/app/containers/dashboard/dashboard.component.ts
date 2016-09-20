/**
 * Created by chengfei on 16/9/19.
 */
import {Component, OnInit, SimpleChange} from '@angular/core';
import {AppState} from '../../app.service';
@Component({
    selector: 'dashboard',
    template: `
        <loading [showLoading]="showLoading"></loading> 
        <navbar></navbar>
        <sidebar></sidebar>
        <section class="app-main"> 
            <router-outlet></router-outlet>
        </section>`
})
export class DashboardComponent implements OnInit {
    showLoading:boolean = false;

    constructor(public appState:AppState) {

    }

    /**
     * 当 Angular 初始化完数据绑定的输入属性后，用来初始化指令或组件。
     */
    ngOnInit() {
        console.log('Initial App State', this.appState.state);
    }

    /**
     * 用来监测所有变化 ( 无论是 Angular 本身能检测的还是无法检测的 ) ,所以这边能更新loading状态
     */
    ngDoCheck() {
        this.showLoading = this.appState.get('loading') || false;
    }

    /**
     * 当 Angular 设置了一个被绑定的输入属性后触发。该回调方法会收到一个包含当前值和
     * 原值的 changes 对象。(类似angular1中watcher,只能监测输入属性)
     */
    ngOnChanges(changes:{[show:string]:SimpleChange}) {
        console.log('检测状态变化2' + JSON.stringify(changes));
    }

    /**
     * 在 Angular 销毁指令或组件之前做一些清理工作，比如退订可观察对象和移除事件处理器，以免导致内存泄露。
     */
    ngOnDestroy() {

    }
}