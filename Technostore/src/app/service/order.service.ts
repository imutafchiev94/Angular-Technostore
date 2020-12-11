import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderPath = environment.apiUrl + 'orders';
  
  constructor(private http: HttpClient) {

   }

   addToCart(data): Observable<Order> {
    return this.http.post<Order>(this.orderPath, data);
  }


  removeProductFromCart(data)  {
    return this.http.put(this.orderPath, data);
  }

  clearCart(id) {
    return this.http.delete(this.orderPath + '/' + id)
  }

  createOrder(data) {
    return this.http.put(this.orderPath, data)
  }

  getOrder(id): Observable<Order> {
    return this.http.get<Order>(this.orderPath + '/' + id);
  }

}
