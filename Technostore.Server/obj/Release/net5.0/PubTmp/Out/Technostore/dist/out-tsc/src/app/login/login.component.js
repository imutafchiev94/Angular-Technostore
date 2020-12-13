import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let LoginComponent = class LoginComponent {
    constructor(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.loginForm = fb.group({
            'username': ['', [Validators.required]],
            'password': ['', [Validators.required]]
        });
        console.log(this.loginForm);
    }
    ngOnInit() {
        if (this.authService.isAuthenticated()) {
            this.router.navigate(['home']);
        }
    }
    login() {
        this.authService.login(this.loginForm.value).
            subscribe(data => {
            this.authService.saveToken(data['token']);
            this.authService.saveAdminToken(data['adminToken']);
        });
    }
    get username() {
        console.log(this.loginForm.get('username'));
        return this.loginForm.get('username');
    }
    get password() {
        return this.loginForm.get('password');
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map