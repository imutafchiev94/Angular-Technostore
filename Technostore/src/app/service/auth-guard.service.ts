import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate  {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if(this.authService.isAuthenticated())
    {
      return true;
    } else {
      this.router.navigate(["login"]);
      return false;
    }
  }

  canActivateAdmin(): boolean {
    if(this.authService.isAdmin())
    {
      return true;
    } else {
      this.router.navigate(["categories"]);
      return false;
    }
  }
}
