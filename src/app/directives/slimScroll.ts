/**
 * 菜单栏自适应滚动
 */
import {
  Directive,
  ElementRef,
  Renderer
} from '@angular/core';
@Directive({
  selector: '[slim-scroll]'
})
export class SlimScroll{
  constructor(
    public element: ElementRef,
    public renderer: Renderer){}
  ngOnInit() {
    var ele;
    ele = $(this.element.nativeElement);
    return ele.slimScroll({
      height: ele.attr('scrollHeight') || "100%"
    })
  }
}

