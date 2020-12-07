import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService {

  constructor(private route: Router, private authService: AuthService) { }

  canActivate(): boolean {
    if(this.authService.isAdmin())
    {
      return true;
    }else {
      this.route.navigate(["categories"]);
      return false;
    }
  }
}
