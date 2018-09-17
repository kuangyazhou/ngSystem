import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CoreModule } from "./core/core.module";

import { AppComponent } from "./app.component";

import { MatSidenavModule, MatButtonModule } from "@angular/material";
import { AppRoutingModule } from "./app-routing.module";

import { ProjectModule } from "./project/project.module";
import { LoginModule } from "./login/login.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    LoginModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
