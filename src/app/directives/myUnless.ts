import { Directive, Input } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({ selector: '[myUnless]' })
export class UnlessDirective {
  constructor(
    //访问模板的作用
    private templateRef: TemplateRef<any>,
    //渲染器
    private viewContainer: ViewContainerRef
  ) { }
  //set 表示只写
  @Input() set myUnless(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
