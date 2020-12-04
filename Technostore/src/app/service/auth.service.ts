import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginPath = environment.apiUrl + 'identity/login';
  registerPath = environment.apiUrl + 'identity/register'

  constructor(private http: HttpClient) { }

  login(data):Observable<any> {
    return this.http.post(this.loginPath, data);
  }

  register(data):Observable<any> {
    return this.http.post(this.registerPath, data);
  }

  saveToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated() {
    if(this.getToken()) {
      return true;
    }

    return false;
  }
  
}
