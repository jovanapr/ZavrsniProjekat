import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  categories: any[] = [];

  constructor(
    private _productsService: ProductsService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.categories = this._productsService.categories;
    this.selectCategory(this.categories[0].id);
  }

  selectCategory(catId: string) {
    this._router.navigate(['/shop', catId]);
  }


}
