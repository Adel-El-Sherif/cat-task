import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from "rxjs";
import { finalize, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoaderInterceptor implements HttpInterceptor {
    
    count = 0;
    
    constructor(private spinner: NgxSpinnerService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if ((req.url.includes('photo/upload')) || (req.url.includes('video/upload'))) {
        } else {
            this.spinner.show()
            this.count++;
        }
        return next.handle(req)
            .pipe(tap(
            ), finalize(() => {
                this.count--;
                if (this.count == 0 || this.count < 0) this.spinner.hide()
            })
        );
    }
}