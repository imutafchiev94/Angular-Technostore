import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DetailsUserComponent = class DetailsUserComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.fetchData();
    }
    ngOnInit() {
    }
    fetchData() {
        this.authService.getUser().subscribe(res => {
            this.user = res;
        });
    }
    edit() {
        this.router.navigate(['user/edit/']);
    }
};
DetailsUserComponent = __decorate([
    Component({
        selector: 'app-details-user',
        templateUrl: './details-user.component.html',
        styleUrls: ['./details-user.component.css']
    })
], DetailsUserComponent);
export { DetailsUserComponent };
//# sourceMappingURL=details-user.component.js.map