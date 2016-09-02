/**
 * 菜单栏自适应滚动
 */
import {
    Directive,
    ElementRef,
    Renderer
} from '@angular/core';
import * as $ from 'jquery';
@Directive({
    selector: '[mySlimScroll]'
})
export class MySlimScrollDirective {
    constructor(public element:ElementRef) {
    }

    ngOnInit() {
        var ele;
        ele = $(this.element.nativeElement);
        return ele.slimScroll({
            height: ele.attr('scrollHeight') || "100%"
        })
    }
}

