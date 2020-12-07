import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/Category';
import { CategoryService } from '../service/category.service';
import {map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent implements OnInit {

  id;
  category: Category
  constructor(private route: ActivatedRoute, private categoryService: CategoryService) {
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
    })
  }

  ngOnInit(): void {
  }

}
