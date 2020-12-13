import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AdminAuthGuardService = class AdminAuthGuardService {
    constructor(route, authService) {
        this.route = route;
        this.authService = authService;
    }
    canActivate() {
        if (this.authService.isAdmin()) {
            return true;
        }
        else {
            this.route.navigate(["categories"]);
            return false;
        }
    }
};
AdminAuthGuardService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AdminAuthGuardService);
export { AdminAuthGuardService };
//# sourceMappingURL=admin-auth-guard.service.js.map