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
    return this.http.post<Category>(this.categoryPath, data);
  }
}
