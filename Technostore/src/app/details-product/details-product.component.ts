import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { Product } from '../models/Product';
import { AuthService } from '../service/auth.service';
import { OrderService } from '../service/order.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  id;
  product: Product
  isAdmin: boolean
  isAuthenticated: boolean
  constructor(private productService: ProductService,
    private route: ActivatedRoute, 
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService) 
  {
    this.fetchData();
  }

  ngOnInit(): void {

    this.isAdmin = this.authService.isAdmin();
    this.isAuthenticated = this.authService.isAuthenticated();

  }

  fetchData() {
    this.route.params.pipe(map(params => {
      const id  = params['id'];
      this.id = id;
      return id
    }), mergeMap(id => this.productService.getProduct(id))).subscribe(res => {
      this.product = res;
      console.log(this.id);
      console.log(res);
    })
  }

  edit(id) {
    this.router.navigate([`products/${id}/edit`]);
  }

  order(id) {
    this.orderService.addToCart(id).subscribe(res => {
      console.log(res);
    })
  }

}
