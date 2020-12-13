import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let NavBarComponent = class NavBarComponent {
    constructor(categoryService, authService, router, orderService) {
        this.categoryService = categoryService;
        this.authService = authService;
        this.router = router;
        this.orderService = orderService;
        this.products = 0;
        this.fetchCategories();
        this.isAuthenticated = this.authService.isAuthenticated();
        this.isAdmin = this.authService.isAdmin();
        if (this.isAuthenticated) {
            this.fetchUsers();
            this.fetchProducts();
        }
    }
    ngOnInit() {
    }
    fetchCategories() {
        this.categoryService.getCategories().subscribe(categories => {
            this.categories = categories;
            console.log(this.categories);
        });
    }
    fetchUsers() {
        this.authService.getUser().subscribe(user => {
            this.user = user;
            this.userName = this.user['userName'];
            console.log(user['userName']);
        });
    }
    fetchProducts() {
        this.orderService.getOrder().subscribe(res => {
            this.products = res["products"].length;
        });
    }
    Logout() {
        if (this.authService.isAdmin()) {
            this.authService.deleteAdminToken();
            this.authService.deleteToken();
            this.router.navigate(["categories/"]);
        }
        else {
            this.authService.deleteToken();
            this.router.navigate(["categories/"]);
        }
        window.location.reload();
    }
};
__decorate([
    Input()
], NavBarComponent.prototype, "title", void 0);
NavBarComponent = __decorate([
    Component({
        selector: 'app-nav-bar',
        templateUrl: './nav-bar.component.html',
        styleUrls: ['./nav-bar.component.css']
    })
], NavBarComponent);
export { NavBarComponent };
//# sourceMappingURL=nav-bar.component.js.map