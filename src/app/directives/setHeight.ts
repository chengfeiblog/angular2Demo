/**
 * 设置内容视图高度,使之自适应滚动
 */
import {
  Directive,
  ElementRef
} from '@angular/core';
@Directive({
  selector: '[set-height]'
})
export class SetHeight{
  public ele;
  constructor(
    ele: ElementRef){
    this.ele = ele.nativeElement;
  }
  ngOnInit() {
    this.setHeight();
    let ele = $(this.ele);
    window.onresize = function () {
      let a = Number(window.innerHeight);
      let b = parseInt(ele.css('margin-top'));
      ele.css('height',a-b);
    };
  }
  setHeight() {
    let ele = $(this.ele);
    let a = Number(window.innerHeight);
    let b = parseInt(ele.css('margin-top'));
    ele.css('height',a-b);
  }
}

