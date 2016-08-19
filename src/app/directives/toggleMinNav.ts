/**
 * 菜单蛋伸缩
 */
import {
  Directive,
  ElementRef,
  Renderer
} from '@angular/core';
@Directive({
  selector: '[toggle-min-nav]'
})
export class ToggleMinNav{
  constructor(
    public element: ElementRef,
    public renderer: Renderer){}
  ngOnInit() {
    var $nav,app,ele;
    ele = $(this.element.nativeElement);
    return app = $("#app"),
      $nav = $("#nav-container"),
      ele.on("click",
        function(e) {
           app.hasClass("nav-min") ? app.removeClass("nav-min") : (app.addClass("nav-min"));
            $nav.find('.open').removeClass('open').find("ul").slideUp();
            e.preventDefault();
        })
  }
}

