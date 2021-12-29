import { Injectable } from "@angular/core";
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
} from "@angular/common/http";
import {
    Observable,
    of,
} from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { MessagesService } from "src/app/shared/services/messages/messages.service";

/**
 * Adds a default error handler to all requests.
 */
@Injectable({
    providedIn: "root",
})
export class ErrorHandlerInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
        private _MessagesService: MessagesService
    ) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next
            .handle(request)
            .pipe(catchError((error) => this.errorHandler(error)));
    }

    /**
     * Logs out the user and clear credentials.
     * @return True if the user was logged out successfully.
     */
    logout(): Observable<boolean> {
        // Customize credentials invalidation here
        // this.credentialsService.setCredentials();
        return of(true);
    }

    // Customize the default error handler here if needed
    private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
        /**
         * pass validation errors to next > core form to handle it
         */
        if (response instanceof HttpErrorResponse) {

            if (response.status === 422) {
                throw response;
            }

            // logout when unauthenticated
            if (response.status === 401) {
                this._MessagesService.openErrorSnackBar(response.error?.error);
                
                let clearedData = ["user", "token"];
                clearedData.forEach((element) => {
                    localStorage.removeItem(element);
                });
                this.router.navigate(["/auth"]);
                throw response;
            }

            if (response.status === 500) {
                throw response;
            }

            if (response.status === 404) {
                throw response;
            }

        }
        throw response;
    }
}
