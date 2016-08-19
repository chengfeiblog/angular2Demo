/**
 * 菜单栏伸缩
 */
import {
  Directive,
  ElementRef,
  Renderer
} from '@angular/core';
@Directive({
  selector: '[collapse-nav]'
})
export class CollapseNav{
  constructor(
    public element: ElementRef,
    public renderer: Renderer){}
  ngOnInit() {
    var $a, $aRest, $lists, $listsRest, app,ele;
    ele = $(this.element.nativeElement);
    return $lists = ele.find("ul").parent("li"),
      $a = $lists.children("a"),
      $listsRest = ele.children("li").not($lists),
      $aRest = $listsRest.children("a"),
      app = $("#app"),
      $a.on("click",
        function(event) {
          var $parent, $this;
          return app.hasClass("nav-min") ? !1 : ($this = $(this), $parent = $this.parent("li"), $lists.not($parent).removeClass("open").find("ul").slideUp(), $parent.toggleClass("open").find("ul").slideToggle(), event.preventDefault())
        }),
      $aRest.on("click",
        function() {
          return $lists.removeClass("open").find("ul").slideUp();
        })
  }
}

