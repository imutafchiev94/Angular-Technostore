import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
let ErrorInterceptorService = class ErrorInterceptorService {
    constructor(toastrService) {
        this.toastrService = toastrService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(retry(0), catchError((err) => {
            let message = "";
            if (err.status === 401) {
                //refresh token or navigate to login
                message = "Token has expired or you should logged in";
            }
            // else  if(err.status === 404)
            // {
            //   //some custom message;
            //   message = "404";
            // }
            // else if (err.status === 400)
            // {
            //   //some message
            //   message = "400";
            // }
            else {
                //global message for error
                message = "Unexpected error";
            }
            this.toastrService.error(message);
            return throwError(err);
        }));
    }
};
ErrorInterceptorService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ErrorInterceptorService);
export { ErrorInterceptorService };
//# sourceMappingURL=error-interceptor.service.js.map