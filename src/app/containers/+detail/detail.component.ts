import { Component, SimpleChange } from '@angular/core';
import {AppState} from '../../app.service';
@Component({
  selector: 'detail',
  template: `
           <div class="card-container">
           <h1>没有详情</h1>
           </div>
  `
})
export class Detail {

  constructor(public appState : AppState ) {

  }

  /**
   * 当 Angular 初始化完数据绑定的输入属性后，用来初始化指令或组件。
   */
  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
