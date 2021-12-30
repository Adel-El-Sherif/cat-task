import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    private _HttpClient: HttpClient
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
    localStorage.clear();
    return this._HttpClient.post(URL,{});
  }


  /**
   * @returns 
   * @description Get user token
   */
  getToken(): string | null {
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
}
