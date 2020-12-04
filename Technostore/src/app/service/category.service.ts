import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryPath = environment.apiUrl + 'categories';
  constructor(private http: HttpClient, private authService: AuthService) { }

  create(data): Observable<Category> {
    let headers = new HttpHeaders();
      headers = headers.set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.post<Category>(this.categoryPath, data, {headers});
  }
}
