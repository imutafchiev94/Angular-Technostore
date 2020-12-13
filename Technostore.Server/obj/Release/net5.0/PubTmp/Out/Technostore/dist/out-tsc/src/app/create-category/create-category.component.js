import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let CreateCategoryComponent = class CreateCategoryComponent {
    constructor(fb, categoryService, router) {
        this.fb = fb;
        this.categoryService = categoryService;
        this.router = router;
        this.categoryForm = this.fb.group({
            "name": ['', Validators.required],
            "slug": ['', Validators.required],
            "categoryPicUrl": ['', Validators.required]
        });
    }
    get name() {
        return this.categoryForm.get('name');
    }
    get categoryPicUrl() {
        return this.categoryForm.get('categoryPicUrl');
    }
    get slug() {
        return this.categoryForm.get('slug');
    }
    create() {
        this.categoryService.create(this.categoryForm.value).subscribe(res => {
            this.router.navigate(['home']);
        });
    }
};
CreateCategoryComponent = __decorate([
    Component({
        selector: 'app-create-category',
        templateUrl: './create-category.component.html',
        styleUrls: ['./create-category.component.css']
    })
], CreateCategoryComponent);
export { CreateCategoryComponent };
//# sourceMappingURL=create-category.component.js.map