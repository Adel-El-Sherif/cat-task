import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/modules/auth/models/login-data/login-data';
import { User } from 'src/app/modules/auth/models/user/user';
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
    private _Router: Router,
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
    this._AuthService.login(data).subscribe((user: User) => {

      this._AuthService.setUser(user);
      this._AuthService.setToken(user.access_token);
      this._Router.navigate(['/'])
    }, error => {
      if(error.status == 401) {
        this.formError = true;
        this.serverSideError = true;
      }
    })
  }

}
