import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  private horizontalPosition: MatSnackBarHorizontalPosition = 'start';

  constructor(private _snackBar: MatSnackBar,) { }


  openSuccessSnackBar(message: string, duration = 3000) {
    this._snackBar.open(message, 'x', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: duration
    });
  }

  openErrorSnackBar(message: string, duration = 3000) {
    this._snackBar.open(message, 'x', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: duration,
      panelClass: 'error'
    });
  }



}
