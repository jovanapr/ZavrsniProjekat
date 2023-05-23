import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  currentCat: string = '';
  products: Product[] = [];

  constructor(
    private _productService: ProductsService,
    private _route: ActivatedRoute,
    private _router: Router,
  ){}

  ngOnInit(): void {
    this.currentCat = this._route.snapshot.params['category'];
    this.getProductsByCatId();

    this._route.params.subscribe({
      next: (data:any) => {
        this.currentCat = data.category;
        this.getProductsByCatId();
      },
      error: (err) => console.log(err)
    });

  }

  getProductsByCatId(){
    this.products = this._productService.getProductsByCategory(this.currentCat);
  }

  navigateToProduct(prodId: number){
    this._router.navigate(['/product', prodId]);
  }

}
