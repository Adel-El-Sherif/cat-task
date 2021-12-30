import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogComponent } from 'src/app/shared/modules/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from "@angular/material/dialog";
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/shared/services/messages/messages.service';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  
  subscription: Subscription = new Subscription();

  constructor(
    private _Router: Router,
    public _MatDialog: MatDialog,
    private _AuthService: AuthService,
    private _MessagesService: MessagesService
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

    this.subscription.add(confirmDialog.afterClosed().subscribe((result: any) => {
      if (result === true) {
        this.logout();
      }
    }));

  }


  logout(): void {
    this._AuthService.logout().subscribe( (res: any) => {
      localStorage.clear();
      this._Router.navigate(['/auth']);
      this._MessagesService.openSuccessSnackBar(res.message);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
