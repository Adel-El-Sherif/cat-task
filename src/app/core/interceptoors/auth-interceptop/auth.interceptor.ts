import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';
import { AuthService } from 'src/app/modules/auth/services/auth.service';


@Injectable({
    providedIn: 'root'
})
export class authInterCeptor implements HttpInterceptor {
    constructor(private _AuthService: AuthService ){}
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        let header:any = {};
        let token = this._AuthService.getToken();
        if(token){
            header['Authorization'] = `Bearer ${token}`;
            const headers = new HttpHeaders(header);
            request = request.clone({ headers });
        }
        return next.handle(request);
    }
}