import { Component, Injectable, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Observable, Observer, Subscription, Subject } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { CartServiceService } from 'src/app/services/cart-service.service';
// var itemsInCart: number = 0;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@Injectable({ providedIn: 'root' })
export class HeaderComponent implements OnInit {

  itemsInCart: number = 0;

  constructor(
    private cartService: CartServiceService,
    private _productService: ProductsService,
    private router: Router) {
  }

  ngOnInit(): void {

    this.itemsInCart = this.cartService.itemsInCart();

    this._productService.data$.subscribe(
      (data) => {

        console.log("quantity befor sending", data.quantity);

        this.cartService.addProduct(data);
        this.itemsInCart = this.cartService.itemsInCart();

        console.log("Header items:", this.itemsInCart);

      }
    );

  }

  loadShoppingCart() {
    this.router.navigate(['/Cart'])
  }
  loadLogin() {
    this.router.navigate(['/Login'])
  }



}
