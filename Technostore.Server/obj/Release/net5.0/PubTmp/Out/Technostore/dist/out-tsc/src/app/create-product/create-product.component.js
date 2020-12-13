import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let CreateProductComponent = class CreateProductComponent {
    constructor(fb, productservice, categoryService) {
        this.fb = fb;
        this.productservice = productservice;
        this.categoryService = categoryService;
        this.categoryService.getCategories().subscribe(res => {
            this.categories = res;
        });
    }
    ngOnInit() {
        this.productForm = this.fb.group({
            'id': [''],
            'modelName': ['', Validators.required],
            'brand': ['', Validators.required],
            'categoryId': ['', Validators.required],
            'description': ['', Validators.required],
            'price': ['', Validators.required],
            'productImageUrl': ['', Validators.required],
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
    create() {
        console.log(this.productForm.value);
        this.productservice.createProduct(this.productForm.value).subscribe(res => {
            console.log(res);
        });
    }
};
CreateProductComponent = __decorate([
    Component({
        selector: 'app-create-product',
        templateUrl: './create-product.component.html',
        styleUrls: ['./create-product.component.css']
    })
], CreateProductComponent);
export { CreateProductComponent };
//# sourceMappingURL=create-product.component.js.map