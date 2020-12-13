import { __decorate } from "tslib";
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let OrderService = class OrderService {
    constructor(http) {
        this.http = http;
        this.orderPath = environment.apiUrl + 'orders';
    }
    addToCart(id) {
        console.log(id);
        let params = new HttpParams();
        params = params.append('id', id);
        return this.http.post(this.orderPath + '/' + id, { params: params });
    }
    removeProductFromCart(id) {
        let params = new HttpParams();
        params = params.append('id', id);
        return this.http.put(this.orderPath, { params: params });
    }
    clearCart() {
        return this.http.put(this.orderPath, null);
    }
    createOrder(data) {
        console.log(data);
        return this.http.put(this.orderPath + '/create', data);
    }
    getOrder() {
        return this.http.get(this.orderPath);
    }
};
OrderService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], OrderService);
export { OrderService };
//# sourceMappingURL=order.service.js.map