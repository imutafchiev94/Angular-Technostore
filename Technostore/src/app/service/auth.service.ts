import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import {User} from '../models/User';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginPath = environment.apiUrl + 'identity/login';;
  registerPath = environment.apiUrl + 'identity/register';
  editPath = environment.apiUrl + 'identity/update';
  detialsPath = environment.apiUrl + 'identity/details';

  constructor(private http: HttpClient) { }

  login(data):Observable<any> {
    return this.http.post(this.loginPath, data);
  }

  register(data):Observable<any> {
    return this.http.post(this.registerPath, data);
  }

  saveToken(token) {
    localStorage.setItem('token', token);

    document.location.reload();
  }

  saveAdminToken(token) {
    if(token !== "")
    {
        localStorage.setItem('adminToken', token);
    }
  }

  getAdminToken() {
    return localStorage.getItem('adminToken');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    return localStorage.removeItem('token');
  }

  deleteAdminToken(){
    return localStorage.removeItem('adminToken');
  }

  isAuthenticated() {
    if(this.getToken()) {
      return true;
    }

    return false;
  }

  isAdmin() {
    if(this.getAdminToken())
    {
      return true;
    }

    return false;
  }

  editUser(data){

    return this.http.put(this.editPath, data);

  }

  getUser(): Observable<User> {

    return this.http.get<User>(this.detialsPath)

  }

}
