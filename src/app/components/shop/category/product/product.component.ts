import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {

  quantity: number;
  currentProductId: number;
  currentProduct: Product = new Product(0, "", 0, "", "", "");
  // headerSubject: Subject<string>;


  constructor(
    private _productService: ProductsService,
    private _route: ActivatedRoute,
    private _router: Router,

  ) {

  }

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (data: any) => {
        this.currentProductId = data.id;
        this.getProductById();
      },
      error: (err) => console.log(err)
    });


  }

  addToCart(product: Product) {

    let pr = new Product(product.id, product.name, product.price, product.imgSrc, product.description, product.description)
    pr.quantity = this.quantity;



    this._productService.emitdata(pr);
  }

  getProductById() {
    this.currentProduct = this._productService.getProductById(this.currentProductId);
  }

}