import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { OnInit, OnDestroy } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService implements OnInit, OnDestroy {

  items: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log("created");
  }

  ngOnDestroy(): void {
    console.log('destroyed');
  }

  addProduct(product: Product) {

    console.log("Adding product to cart");
    this.items.push(product);

  }

  itemsInCart() {
    let itemsCount: number = 0;
    for (var i = 0; i < this.items.length; i++) {

      itemsCount += this.items[i].quantity;
      console.log("cart item", this.items[i].name, "quantity", this.items[i].quantity);
    }

    return itemsCount
  }

  getCartProducts() {

    let cartProducts: Product[] = [];

    for (let product of this.items) {
      let n = cartProducts.findIndex((obj => obj.id == product.id));
      if (n > -1) {

        cartProducts[n].quantity += product.quantity
        continue
      }

      let pr = new Product(product.id, product.name, product.price, product.imgSrc, product.description, product.category);
      pr.quantity = product.quantity

      cartProducts.push(pr);
    }

    return cartProducts;
  }

}
