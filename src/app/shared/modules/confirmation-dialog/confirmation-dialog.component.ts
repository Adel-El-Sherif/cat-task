import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  // Begin properties _______________________
  title: string = '';
  message: string = '';
  // End properties _______________________

  constructor(
    public _MatDialog: MatDialog,
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  cancel(): void {
    this.dialogRef.close(false);
  }
  confirm(): void {
    this.dialogRef.close(true);
  }

  ngOnInit(): void {
  }

}
