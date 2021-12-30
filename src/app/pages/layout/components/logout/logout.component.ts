import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogComponent } from 'src/app/shared/modules/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    public _MatDialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }



  //  A function that opens Confirmation Module
  confirmDialog() {
    const confirmDialog = this._MatDialog.open(ConfirmationDialogComponent, {
      panelClass: ['custom-dialog-container', 'bg-none'],
      data: {
        title: 'Logout',
        message: 'Are you sure ?'
      }
    });
  }


  logout(): void {

  }
}
