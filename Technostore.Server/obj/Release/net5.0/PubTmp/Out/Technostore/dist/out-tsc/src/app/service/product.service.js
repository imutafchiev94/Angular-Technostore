import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.productPath = environment.apiUrl + 'products';
    }
    createProduct(data) {
        return this.http.post(this.productPath, data);
    }
    getProduct(id) {
        return this.http.get(this.productPath + '/' + id);
    }
    deleteProduct(id) {
        return this.http.delete(this.productPath + '/' + id);
    }
    editProduct(data) {
        return this.http.put(this.productPath + '/' + data['id'], data);
    }
};
ProductService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProductService);
export { ProductService };
//# sourceMappingURL=product.service.js.map