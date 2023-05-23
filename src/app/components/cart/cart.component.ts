import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { Product } from 'src/app/models/Product';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Product[] = [];

  constructor(
    private cartService: CartServiceService,
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getCartProducts()
  }

}
