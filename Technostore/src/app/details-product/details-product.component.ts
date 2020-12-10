import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { Product } from '../models/Product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  id;
  product: Product
  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) 
  {
    this.fetchData();
  }

  ngOnInit(): void {
  }

  fetchData() {
    this.route.params.pipe(map(params => {
      const id  = params['id'];
      return id
    }), mergeMap(id => this.productService.getProduct(id))).subscribe(res => {
      this.product = res;

      console.log(res);
    })
  }

  edit(id) {
    this.router.navigate([`products/${id}/edit`]);
  }

}
