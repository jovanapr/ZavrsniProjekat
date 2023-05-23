import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { CategoryComponent } from './components/shop/category/category.component';
import { ProductComponent } from './components/shop/category/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'shop', component: ShopComponent, children: [
      { path: ':category', component: CategoryComponent },
      // { path: 'product/:id', component: ProductComponent } 
    ]
  },
  { path: 'product/:id', component: ProductComponent },
  { path: "Cart", component: CartComponent },
  { path: "Login", component: LoginComponent },
  { path: "Singup", component: SignupComponent },
  { path: "about", component: AboutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
