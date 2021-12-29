import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatSnackBarModule } from "@angular/material/snack-bar";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    NgxSpinnerModule,
    MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    NgxSpinnerModule
  ]
})
export class SharedModule { }
