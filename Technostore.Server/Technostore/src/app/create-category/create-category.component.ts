import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {

  categoryForm: FormGroup
  constructor(private fb: FormBuilder, private categoryService: CategoryService, private router: Router) { 
    this.categoryForm = this.fb.group({
      "name": ['', Validators.required],
      "slug": ['', Validators.required],
      "categoryPicUrl": ['', Validators.required]
    });
  }

  get name() {
    return this.categoryForm.get('name');
  }

  get categoryPicUrl() {
    return this.categoryForm.get('categoryPicUrl');
  }

  get slug() {
    return this.categoryForm.get('slug');
  }

  create() {
    this.categoryService.create(this.categoryForm.value).subscribe(res => {
      this.router.navigate(['home']);
    })
  }
}
