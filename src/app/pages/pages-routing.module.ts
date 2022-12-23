import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:'',component:LayoutComponent,
    children:[
      {
        path:'',redirectTo:'/home', pathMatch:'full'
      },
      {
        path:'home',component:HomeComponent
      },
      {
        path:'aboutus',component:AboutComponent
      },
      {
        path:'account',component:AccountComponent
      },
      {
        path:'products', component:ProductsComponent
      },
      {
        path:'cart', component:CartComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
