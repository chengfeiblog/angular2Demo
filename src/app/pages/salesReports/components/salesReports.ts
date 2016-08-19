import { Component} from '@angular/core';
import {MODAL_DIRECTVES, BS_VIEW_PROVIDERS,DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import {Item} from '../model/Item';
@Component({
  selector: 'sales-reports',
  template: require('./salesReports.html'),
  styles: [require('./sales.css')],
  directives: [MODAL_DIRECTVES,DATEPICKER_DIRECTIVES,CORE_DIRECTIVES, FORM_DIRECTIVES],
  viewProviders:[BS_VIEW_PROVIDERS]
})
export class SalesReportsCmp{
  public items: Item[];
  public loading:boolean = true;
  public isOpenDatepicker:boolean = false;
  constructor() {
  }

  ngOnInit() {
    this.loading = false;
    this.items = [
      {
        id: 1,
        name: '新增新客户',
        opened: true
      },
      {
        id: 1,
        name: '新增成熟客户',
        opened: true
      },
      {
        id: 1,
        name: '新增断约客户',
        opened: false
      },
      {
        id: 1,
        name: '拜访客户数',
        opened: false
      },
      {
        id: 1,
        name: '新增订单数',
        opened: false
      }];
  }

  /**
   * 开关方法
   */
  changOpened(id, opened): void {
    console.log(`${id}/${opened}`);
  }
  saveConfig():void {
    console.log(this.items);
  }

  public dt:Date = null;

  public getDate():number {
    return this.dt && this.dt.getTime();
  }
  public tabs:Array<any> = [
    {title: 'Dynamic Title 1', content: 'Dynamic content 1'},
    {title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true},
    {title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true}
  ];

  public alertMe():void {
    setTimeout(function ():void {
      alert('You\'ve selected the alert tab!');
    });
  };

  public setActiveTab(index:number):void {
    this.tabs[index].active = true;
  };

  public removeTabHandler(/*tab:any*/):void {
    console.log('Remove Tab handler');
  };

  canDeactivate(): Observable<boolean> | boolean {
    if (true) {
      confirm('是否保存');
      return true;
    }
    // let p = this.dialogService.confirm('Discard changes?');
    // let o = Observable.fromPromise(p);
    // return o;
  }
}
