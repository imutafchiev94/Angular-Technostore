import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let EditProductComponent = class EditProductComponent {
    constructor(fb, route, productService, router, categoryService) {
        this.fb = fb;
        this.route = route;
        this.productService = productService;
        this.router = router;
        this.categoryService = categoryService;
        this.productForm = this.fb.group({
            'id': [''],
            'modelName': ['', Validators.required],
            'brand': ['', Validators.required],
            'categoryId': ['', Validators.required],
            'description': ['', Validators.required],
            'price': ['', Validators.required],
            'productImageUrl': ['', Validators.required],
        });
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.productId = params['id'];
            this.productService.getProduct(this.productId).subscribe(res => {
                this.product = res;
                this.productForm = this.fb.group({
                    'id': [this.productId, Validators.required],
                    'modelName': [this.product.modelName, Validators.required],
                    'brand': [this.product.brand, Validators.required],
                    'categoryId': [this.product.categoryId, Validators.required],
                    'description': [this.product.description, Validators.required],
                    'price': [this.product.price, Validators.required],
                    'productImageUrl': [this.product.productImageUrl, Validators.required],
                });
            });
        });
        this.fetchCategories();
    }
    fetchCategories() {
        this.categoryService.getCategories().subscribe(categories => {
            this.categories = categories;
            console.log(this.categories);
        });
    }
    get modelName() {
        return this.productForm.get('modelName');
    }
    get brand() {
        return this.productForm.get('brand');
    }
    get description() {
        return this.productForm.get('description');
    }
    get categoryId() {
        return this.productForm.get('categoryId');
    }
    get price() {
        return this.productForm.get('price');
    }
    get productImageUrl() {
        return this.productForm.get('productImageUrl');
    }
    edit() {
        console.log(this.productForm.value);
        this.productService.editProduct(this.productForm.value).subscribe(res => {
            console.log(res);
        });
    }
};
EditProductComponent = __decorate([
    Component({
        selector: 'app-edit-product',
        templateUrl: './edit-product.component.html',
        styleUrls: ['./edit-product.component.css']
    })
], EditProductComponent);
export { EditProductComponent };
//# sourceMappingURL=edit-product.component.js.map