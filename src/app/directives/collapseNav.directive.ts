import {Directive, ElementRef} from '@angular/core';
import * as $ from 'jquery';
@Directive({
    selector: '[myCollapseNav]' // 指令推荐使用小驼峰命名,前面加自定义名词
})
export class MyCollapseNavDirective {
    constructor(public element:ElementRef) {
    }

    ngOnInit() {
        var $a, $aRest, $lists, $listsRest, app, ele;
        ele = $(this.element.nativeElement);
        return $lists = ele.find("ul").parent("li"),
            $a = $lists.children("a"),
            $listsRest = ele.children("li").not($lists),
            $aRest = $listsRest.children("a"),
            app = $("#app"),
            $a.on("click",
                function (event) {
                    var $parent, $this;
                    return app.hasClass("nav-min") ? !1 : ($this = $(this), $parent = $this.parent("li"), $lists.not($parent).removeClass("open").find("ul").slideUp(), $parent.toggleClass("open").find("ul").slideToggle(), event.preventDefault())
                }),
            $aRest.on("click",
                function () {
                    return $lists.removeClass("open").find("ul").slideUp();
                })
    }
}
