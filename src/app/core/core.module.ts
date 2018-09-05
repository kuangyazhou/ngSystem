import { NgModule, SkipSelf, Optional } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

import { SharedModule } from "../shared/shared.module";
// import {
//   MatToolbarModule,
//   MatButtonModule,
//   MatIconModule
// } from "@angular/material";
@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
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
