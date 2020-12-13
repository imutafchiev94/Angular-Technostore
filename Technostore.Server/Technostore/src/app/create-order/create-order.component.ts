import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../models/Order';
import { Product } from '../models/Product';
import { OrderService } from '../service/order.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  orderForm: FormGroup
  products: Array<Product>
  order: Order;
  totalPrice: number = 0;
  constructor(private fb: FormBuilder, 
    private route: ActivatedRoute, 
    private productService:ProductService,
    private router: Router,
    private orderService: OrderService) { 
      this.orderForm = this.fb.group({
        'id': [''],
        'firstName': ['', Validators.required],
        'lastName': ['', Validators.required],
        'phoneNumber': ['', Validators.required],
        'email': ['', Validators.required],
        'address': ['', Validators.required],
        'city': ['', Validators.required],
        'country': ['', Validators.required],
        'postalCode': ['', Validators.required],
      })
    }

  ngOnInit(): void {
      this.fetchProducts();
      this.orderForm = this.fb.group({
        'id': [this.order.id],
        'firstName': ['', Validators.required],
        'lastName': ['', Validators.required],
        'phoneNumber': ['', Validators.required],
        'email': [this.order.email, Validators.required],
        'address': [this.order.address, Validators.required],
        'city': [this.order.city, Validators.required],
        'country': [this.order.city, Validators.required],
        'postalCode': ['', Validators.required],
      })
    }

    fetchProducts() {
      this.orderService.getOrder().subscribe(res => {
        this.order = res;
        this.products = res["products"];
        for (let i = 0; i < this.products.length; i++) {
          this.totalPrice += +this.products[i].price;
        }
      })
    }


    get firstName() {
      return this.orderForm.get('firstName');
    }
  
    get lastName() {
      return this.orderForm.get('lastName');
    }
  
    get phoneNumber() {
      return this.orderForm.get('phoneNumber');
    }
  
    get email() {
      return this.orderForm.get('email');
    }
  
    get address() {
      return this.orderForm.get('address');
    }
  
    get city() {
      return this.orderForm.get('city');
    }

    get country() {
      return this.orderForm.get('country');
    }

    get postalCode() {
      return this.orderForm.get('postalCode');
    }
  
    finalize()
    {
      this.orderService.createOrder(this.orderForm.value).subscribe(res => {
        console.log(res);
        this.orderService.clearCart().subscribe(res => {
          
        })
      });
    }

    removeProduct(id){
      this.orderService.removeProductFromCart(id).subscribe(res => {
        console.log(id);
      });
    }

}
