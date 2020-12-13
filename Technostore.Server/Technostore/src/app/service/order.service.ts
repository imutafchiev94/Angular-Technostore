import { HttpClient, HttpParams } from '@angular/common/http';
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

   addToCart(id): Observable<any> {
     console.log(id);
     let params = new HttpParams();
     params = params.append('id', id);
    return this.http.post<any>(this.orderPath + '/' + id , {params: params});
  }


  removeProductFromCart(id)  {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.put(this.orderPath, {params: params});
  }

  clearCart() {
    return this.http.put(this.orderPath, null)
  }

  createOrder(data) {
    console.log(data);
    return this.http.put(this.orderPath + '/create', data)
  }

  getOrder(): Observable<Order> {
    return this.http.get<Order>(this.orderPath);
  }

}
