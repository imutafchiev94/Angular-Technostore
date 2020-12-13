import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
let CategoryService = class CategoryService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.categoryPath = environment.apiUrl + 'categories';
    }
    create(data) {
        return this.http.post(this.categoryPath, data);
    }
    getCategories() {
        return this.http.get(this.categoryPath);
    }
    getCategory(id) {
        return this.http.get(this.categoryPath + '/' + id);
    }
    deleteCategory(id) {
        return this.http.delete(this.categoryPath + '/' + id);
    }
    editCategory(data) {
        return this.http.put(this.categoryPath + '/' + data['id'], data);
    }
};
CategoryService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CategoryService);
export { CategoryService };
//# sourceMappingURL=category.service.js.map