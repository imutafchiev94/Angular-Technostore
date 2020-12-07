import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/Category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  categories: Array<Category>
  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories()
  {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
      console.log(this.categories);
    })
  }

  routeToCategory(id) {
    this.router.navigate(["categories", id])
  }

  deleteCat(id) {
    console.log("Delete")
    this.categoryService.deleteCategory(id).subscribe(res => {
      this.fetchCategories();
    })
  }
}
