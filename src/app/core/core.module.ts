import { NgModule, SkipSelf, Optional } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class CoreModule {
  // 如果没有，就正常注入，如果有，就报错
  constructor(
    @Optional()
    @SkipSelf()
    parent: CoreModule
  ) {
    if (parent) {
      throw new Error("模块已经存在");
    }
  }
}
