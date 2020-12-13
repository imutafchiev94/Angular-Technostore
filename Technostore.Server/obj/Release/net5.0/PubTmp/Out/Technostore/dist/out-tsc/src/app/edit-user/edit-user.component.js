import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let EditUserComponent = class EditUserComponent {
    constructor(fb, router, authService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.getUser().subscribe(res => {
            this.user = res;
            console.log(this.user);
            this.userForm = this.fb.group({
                'name': ['', Validators.required],
                'address': ['', Validators.required],
                'city': ['', Validators.required],
                'country': ['', Validators.required],
                'avatar': ['', Validators.required],
            });
        });
    }
    edit() {
        return this.authService.editUser(this.userForm.value).subscribe(res => {
            console.log(this.userForm.value);
            this.router.navigate(['user/details']);
        });
    }
    get name() {
        return this.userForm.get('name');
    }
    get address() {
        return this.userForm.get('address');
    }
    get city() {
        return this.userForm.get('city');
    }
    get country() {
        return this.userForm.get('contry');
    }
    get avatar() {
        return this.userForm.get('avatar');
    }
};
EditUserComponent = __decorate([
    Component({
        selector: 'app-edit-user',
        templateUrl: './edit-user.component.html',
        styleUrls: ['./edit-user.component.css']
    })
], EditUserComponent);
export { EditUserComponent };
//# sourceMappingURL=edit-user.component.js.map