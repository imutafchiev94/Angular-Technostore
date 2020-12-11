import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/Category';
import { CategoryService } from '../service/category.service';
import {map, mergeMap} from 'rxjs/operators';
import { AuthService } from '../service/auth.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent implements OnInit {

  id;
  category: Category
  isAdmin : boolean;
  constructor(private route: ActivatedRoute,
     private categoryService: CategoryService,
      private authService: AuthService,
      private router: Router,
      private productService: ProductService) {
    // this.route.params.subscribe(res => {
    //   this.id = res['id'];
    //   this.categoryService.getCategory(this.id).subscribe(res => {
    //     this.category = res;
    //   });
    // })
    this.fetchData();
   }

  fetchData() {
    this.route.params.pipe(map(params => {
      const id  = params['id'];
      return id
    }), mergeMap(id => this.categoryService.getCategory(id))).subscribe(res => {
      this.category = res;

      console.log(res);
    })
  }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
  }


  editProduct(id) {
    return this.router.navigate([`products/${id}/edit`])
  }

  deleteProduct(id) {
    return this.productService.deleteProduct(id).subscribe(res => {
      this.fetchData();
    });
  }
}
