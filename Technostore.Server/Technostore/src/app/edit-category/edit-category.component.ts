import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/Category';
import { AuthService } from '../service/auth.service';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  categoryForm: FormGroup
  categoryId: string;
  category: Category
  isAdmin: boolean;
  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private categoryService:CategoryService,
    private router: Router,
    private authService: AuthService
    ) 
    {
      this.categoryForm = this.fb.group({
        'id': [''],
        'name': ['', Validators.required], 
        'categoryPicUrl': ['', Validators.required]
      })
     }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = params['id'];
      this.categoryService.getCategory(this.categoryId).subscribe(res => {
        this.category = res;
        this.categoryForm = this.fb.group({
          'id': [this.category.id],
          'name': [this.category.name], 
          'categoryPicUrl': [this.category.categoryPicUrl],
        })
      })
    })
   
  }

  

  editCategory()
  {
    console.log('hi');
    console.log(this.categoryForm.value);
    this.categoryService.editCategory(this.categoryForm.value).subscribe(res => {
      this.router.navigate(['home'])
    });
  }

  get name() {
      return this.categoryForm.get('name');
  }

  get categoryPicUrl() {
    return this.categoryForm.get('categoryPicUrl');
  }

}
