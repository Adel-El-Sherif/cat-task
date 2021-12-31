import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagesService } from 'src/app/shared/services/messages/messages.service';
import { environment } from 'src/environments/environment';
import { LoginData } from '../models/login-data/login-data';
import { Me } from '../models/me/me';
import { RegistrationData } from '../models/registration-data/registration-data';
import { User } from '../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiURL;

  constructor(
    private _HttpClient: HttpClient,
    private _MessagesService: MessagesService
  ) {   }



  /**
   * @param {LoginData} data 
   * @returns {Observable<User>}
   * @description Login Function
   */
  login(data: LoginData): Observable<User> {
    const URL = `${this.apiUrl}auth/login`;
    return (this._HttpClient.post(URL, data) as Observable<User>);
  }


  /**
   * @param data 
   * @returns {Observable<User>}
   * @description Registration Function
   */
  register(data: RegistrationData,): Observable<User> {
    const URL = `${this.apiUrl}add-user`;
    return (this._HttpClient.post(URL, data) as Observable<User>);
  }


  /**
   * @description Get logged user info Function
   * @param data 
   * @returns {Observable<Me>}
   */
  me(): Observable<Me>  {
    const URL = `${this.apiUrl}auth/me`;
    return (this._HttpClient.get(URL) as Observable<Me>);
  }


  /**
   * @description Logout Function
   */
   logout() {
    const URL = `${this.apiUrl}auth/logout`;
    return this._HttpClient.post(URL,{});
  }


  /**
   * @returns 
   * @description Get user token
   */
  getToken(): any {
    return localStorage.getItem('token');
  }


  /**
   * @param token 
   * @description Set Token 
   */
  setToken(token: any) {
    localStorage.setItem('token', token);
  }

  /**
   * @description Get user Data from local Storage
   */
  getUser():string | null{
    return localStorage.getItem('user');
  }


  /**
   * @param {{User}} user 
   * @description Set user data to local Storage
   */
  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  /**
 * @returns {User}
 * @description Refresh expired token
 */
   refreshToken(): Observable<User> {
    const URL = `${this.apiUrl}auth/refresh`;
    return (this._HttpClient.post(URL,{}) as Observable<User>);
  }


  /**
   * @description Check if the token is expired 
   */
  getTokenExpireDate() {
    const token: string | null = localStorage.getItem('token');
    if (token) {
      let JWT_arr: any[] = token.split('.');
      let JWT_str = JWT_arr[1]; 
      let JWT_obj_str;
      JWT_obj_str = atob(JWT_str);
      let JWT_obj = JSON.parse(JWT_obj_str);
      let exp = JWT_obj.exp;
      let exp_date: any = new Date(exp * 1000);
      let current_date: any = new Date();
      let should_refresh_token: any = (exp_date - current_date) < 15000;

      if (should_refresh_token) {
        this.refreshToken().subscribe((user: User) => {
            this.setUser(user);
            this.setToken(user.access_token);
          }, error => {
            this._MessagesService.openErrorSnackBar(error.error)
          })
      }

    }
  }


}
