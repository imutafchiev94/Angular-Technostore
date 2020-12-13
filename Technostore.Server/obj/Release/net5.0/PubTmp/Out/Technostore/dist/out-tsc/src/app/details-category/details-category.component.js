import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';
let DetailsCategoryComponent = class DetailsCategoryComponent {
    constructor(route, categoryService, authService, router, productService) {
        this.route = route;
        this.categoryService = categoryService;
        this.authService = authService;
        this.router = router;
        this.productService = productService;
        // this.route.params.subscribe(res => {
        //   this.id = res['id'];
        //   this.categoryService.getCategory(this.id).subscribe(res => {
        //     this.category = res;
        //   });
        // })
        this.fetchData();
    }
    fetchData() {
        this.route.params.pipe(map(params => {
            const id = params['id'];
            return id;
        }), mergeMap(id => this.categoryService.getCategory(id))).subscribe(res => {
            this.category = res;
            console.log(res);
        });
    }
    ngOnInit() {
        this.isAdmin = this.authService.isAdmin();
    }
    editProduct(id) {
        return this.router.navigate([`products/${id}/edit`]);
    }
    deleteProduct(id) {
        return this.productService.deleteProduct(id).subscribe(res => {
            this.fetchData();
        });
    }
};
DetailsCategoryComponent = __decorate([
    Component({
        selector: 'app-details-category',
        templateUrl: './details-category.component.html',
        styleUrls: ['./details-category.component.css']
    })
], DetailsCategoryComponent);
export { DetailsCategoryComponent };
//# sourceMappingURL=details-category.component.js.map