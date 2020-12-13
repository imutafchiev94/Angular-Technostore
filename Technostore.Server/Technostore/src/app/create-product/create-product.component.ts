import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../models/Category';
import { CategoryService } from '../service/category.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productForm: FormGroup
  categories: Array<Category>
  constructor(private fb: FormBuilder, private productservice: ProductService,
     private categoryService: CategoryService) {
      this.categoryService.getCategories().subscribe(res => {
        this.categories = res;
        
      });
      
   }

  ngOnInit(): void {
      this.productForm = this.fb.group({
        'id': [''],
        'modelName': ['', Validators.required],
        'brand': ['', Validators.required],
        'categoryId': ['', Validators.required],
        'description': ['', Validators.required],
        'price': ['', Validators.required],
        'productImageUrl': ['', Validators.required],
      })

      this.fetchCategories()
  }


  fetchCategories()
  {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
      console.log(this.categories);
    })
  }

  get modelName() {
    return this.productForm.get('modelName');
  }

  get brand() {
    return this.productForm.get('brand');
  }

  get description() {
    return this.productForm.get('description');
  }

  get categoryId() {
    return this.productForm.get('categoryId');
  }

  get price() {
    return this.productForm.get('price');
  }

  get productImageUrl() {
    return this.productForm.get('productImageUrl');
  }


  create()
  {
console.log(this.productForm.value);
      this.productservice.createProduct(this.productForm.value).subscribe(res => {
        console.log(res)
      });
  }
}
