import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule,
  MatSlideToggleModule
} from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatSlideToggleModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatSlideToggleModule
  ],
  declarations: []
})
export class SharedModule {}
