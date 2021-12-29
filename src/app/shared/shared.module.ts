import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    NgxSpinnerModule
  ],
  exports: [
    MatButtonModule,
    NgxSpinnerModule
  ]
})
export class SharedModule { }
