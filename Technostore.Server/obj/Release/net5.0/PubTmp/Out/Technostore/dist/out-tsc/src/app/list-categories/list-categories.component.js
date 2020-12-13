import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ListCategoriesComponent = class ListCategoriesComponent {
    constructor(categoryService, router, authService) {
        this.categoryService = categoryService;
        this.router = router;
        this.authService = authService;
        this.displayedColumns = ['categoryPicUrl', 'name', 'actions'];
    }
    ngOnInit() {
        this.fetchCategories();
        this.isAdmin = this.authService.isAdmin();
    }
    fetchCategories() {
        this.categoryService.getCategories().subscribe(categories => {
            this.categories = categories;
            console.log(this.categories);
        });
    }
    routeToCategory(id) {
        this.router.navigate(["categories", id]);
    }
    deleteCategory(id) {
        console.log("Delete");
        this.categoryService.deleteCategory(id).subscribe(res => {
            this.fetchCategories();
        });
    }
    editCategory(id) {
        this.router.navigate([`categories/${id}/edit`]);
    }
};
ListCategoriesComponent = __decorate([
    Component({
        selector: 'app-list-categories',
        templateUrl: './list-categories.component.html',
        styleUrls: ['./list-categories.component.css']
    })
], ListCategoriesComponent);
export { ListCategoriesComponent };
//# sourceMappingURL=list-categories.component.js.map