import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productPath = environment.apiUrl + 'products';
  
  constructor(private http: HttpClient) {

   }

   createProduct(data): Observable<Product> {
    return this.http.post<Product>(this.productPath, data);
  }


  getProduct(id): Observable<Product> {
    return this.http.get<Product>(this.productPath + '/' + id);
  }

  deleteProduct(id) {
    return this.http.delete(this.productPath + '/' + id)
  }

  editProduct(data) {
    return this.http.put(this.productPath, data)
  }
}
