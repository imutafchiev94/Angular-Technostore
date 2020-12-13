import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.loginPath = environment.apiUrl + 'identity/login';
        this.registerPath = environment.apiUrl + 'identity/register';
        this.editPath = environment.apiUrl + 'identity/update';
        this.detialsPath = environment.apiUrl + 'identity/details';
    }
    ;
    login(data) {
        return this.http.post(this.loginPath, data);
    }
    register(data) {
        return this.http.post(this.registerPath, data);
    }
    saveToken(token) {
        localStorage.setItem('token', token);
        document.location.reload();
    }
    saveAdminToken(token) {
        if (token !== "") {
            localStorage.setItem('adminToken', token);
        }
    }
    getAdminToken() {
        return localStorage.getItem('adminToken');
    }
    getToken() {
        return localStorage.getItem('token');
    }
    deleteToken() {
        return localStorage.removeItem('token');
    }
    deleteAdminToken() {
        return localStorage.removeItem('adminToken');
    }
    isAuthenticated() {
        if (this.getToken()) {
            return true;
        }
        return false;
    }
    isAdmin() {
        if (this.getAdminToken()) {
            return true;
        }
        return false;
    }
    editUser(data) {
        return this.http.put(this.editPath, data);
    }
    getUser() {
        return this.http.get(this.detialsPath);
    }
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map