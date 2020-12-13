import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';
let DetailsProductComponent = class DetailsProductComponent {
    constructor(productService, route, router, authService, orderService) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.orderService = orderService;
        this.fetchData();
        this.isAdmin = this.authService.isAdmin();
        this.isAuthenticated = this.authService.isAuthenticated();
    }
    ngOnInit() {
    }
    fetchData() {
        this.route.params.pipe(map(params => {
            const id = params['id'];
            this.id = id;
            return id;
        }), mergeMap(id => this.productService.getProduct(id))).subscribe(res => {
            this.product = res;
        });
    }
    edit(id) {
        this.router.navigate([`products/${id}/edit`]);
    }
    order(id) {
        this.orderService.addToCart(id).subscribe(res => {
            document.location.reload();
        });
    }
};
DetailsProductComponent = __decorate([
    Component({
        selector: 'app-details-product',
        templateUrl: './details-product.component.html',
        styleUrls: ['./details-product.component.css']
    })
], DetailsProductComponent);
export { DetailsProductComponent };
//# sourceMappingURL=details-product.component.js.map