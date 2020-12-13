import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let EditCategoryComponent = class EditCategoryComponent {
    constructor(fb, route, categoryService, router, authService) {
        this.fb = fb;
        this.route = route;
        this.categoryService = categoryService;
        this.router = router;
        this.authService = authService;
        this.categoryForm = this.fb.group({
            'id': [''],
            'name': ['', Validators.required],
            'categoryPicUrl': ['', Validators.required]
        });
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.categoryId = params['id'];
            this.categoryService.getCategory(this.categoryId).subscribe(res => {
                this.category = res;
                this.categoryForm = this.fb.group({
                    'id': [this.category.id],
                    'name': [this.category.name],
                    'categoryPicUrl': [this.category.categoryPicUrl],
                });
            });
        });
    }
    editCategory() {
        console.log('hi');
        console.log(this.categoryForm.value);
        this.categoryService.editCategory(this.categoryForm.value).subscribe(res => {
            this.router.navigate(['home']);
        });
    }
    get name() {
        return this.categoryForm.get('name');
    }
    get categoryPicUrl() {
        return this.categoryForm.get('categoryPicUrl');
    }
};
EditCategoryComponent = __decorate([
    Component({
        selector: 'app-edit-category',
        templateUrl: './edit-category.component.html',
        styleUrls: ['./edit-category.component.css']
    })
], EditCategoryComponent);
export { EditCategoryComponent };
//# sourceMappingURL=edit-category.component.js.map