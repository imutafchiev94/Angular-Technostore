import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let RegisterComponent = class RegisterComponent {
    constructor(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.registerForm = fb.group({
            'username': ['', [Validators.required]],
            'email': ['', [Validators.required]],
            'password': ['', [Validators.required]],
            'name': ['', Validators.required],
            'country': ['', Validators.required],
            'city': ['', Validators.required],
            'address': ['', Validators.required],
            'avatar': ['', Validators.required],
            'role': ['User'],
        });
    }
    ngOnInit() {
    }
    register() {
        this.authService.register(this.registerForm.value).subscribe(data => {
            this.router.navigate(['home']);
        });
    }
    get username() {
        return this.registerForm.get('username');
    }
    get email() {
        return this.registerForm.get('email');
    }
    get password() {
        return this.registerForm.get('password');
    }
    get name() {
        return this.registerForm.get('name');
    }
    get country() {
        return this.registerForm.get('country');
    }
    get city() {
        return this.registerForm.get('city');
    }
    get address() {
        return this.registerForm.get('address');
    }
    get avatar() {
        return this.registerForm.get('avatar');
    }
};
RegisterComponent = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map