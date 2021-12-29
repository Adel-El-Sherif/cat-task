import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginData } from 'src/app/modules/auth/models/login-data/login-data';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  formError: boolean = false;
  serverSideError: boolean = false;

  constructor(
    private _AuthService: AuthService
  ) { }

  ngOnInit(): void {
  }



  /**
   * 
   * @param loginForm 
   */
  submit(loginForm: NgForm): any {
    if(!loginForm.valid) {
      this.formError = true;
      return false
    } else {
      const Data: LoginData = loginForm.value;
      this.login(Data);
    }
  }


  /**
   * 
   * @param data 
   */
  login(data: LoginData) {
    this._AuthService.login(data).subscribe(res => {
      // ....
    }, error => {
      if(error.status == 401) {
        this.formError = true;
        this.serverSideError = true;
      }
    })
  }



}
