import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let TokenInterceptorService = class TokenInterceptorService {
    constructor(auhtService) {
        this.auhtService = auhtService;
    }
    intercept(request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.auhtService.getToken()}`
            }
        });
        return next.handle(request);
    }
};
TokenInterceptorService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TokenInterceptorService);
export { TokenInterceptorService };
//# sourceMappingURL=token-interceptor.service.js.map