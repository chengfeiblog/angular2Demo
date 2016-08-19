/**
 * 菜单栏伸缩
 */
import {
  Directive,
  ElementRef,
  Renderer
} from '@angular/core';
@Directive({
  selector: '[toggle-off-canvas]'
})
export class ToggleOffCanvas{
  constructor(
    public element: ElementRef,
    public renderer: Renderer){}
  ngOnInit() {
    var ele,app;
    ele = $(this.element.nativeElement),
    app = $('#app');
    return ele.on("click",
      function() {
        return app.toggleClass("on-canvas")
      })
  }
}

