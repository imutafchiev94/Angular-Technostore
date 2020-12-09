import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/Category';
import { User } from '../models/User';
import { AuthService } from '../service/auth.service';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() title: string;
  categories: Array<Category>;
  isAuthenticated: boolean;
  isAdmin:boolean;
  userName: string;
  user: User;

  constructor(private categoryService: CategoryService, private authService: AuthService, private router: Router) { }
  
  ngOnInit(): void {
    this.fetchCategories();
    this.isAuthenticated = this.authService.isAuthenticated();
    this.isAdmin = this.authService.isAdmin();
    this.fetchUsers();
  }

  fetchCategories()
  {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
      console.log(this.categories);
    })
  }

  fetchUsers() {
    this.authService.getUser().subscribe(user => {
      this.user = user;
      this.userName = this.user['userName'];
      console.log(user['userName'])
    });
  }

  Logout()
  {
    if(this.authService.isAdmin())
    {
      this.authService.deleteAdminToken();
      this.authService.deleteToken();
      this.router.navigate(["categories/"]);
    }
    else {
      this.authService.deleteToken();
      this.router.navigate(["categories/"]);
    }


    window.location.reload();
  }
}
