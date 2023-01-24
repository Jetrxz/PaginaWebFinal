import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { ProductsComponent } from './products/products.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AccountHomeComponent } from './account-home/account-home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AboutComponent,
    HeaderComponent,
    ProductsComponent,
    AccountComponent,
    CartComponent,
    LayoutComponent,
    HomeComponent,
    FooterComponent,
    AccountHomeComponent,
    CheckoutComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule
  ]
})
export class PagesModule { }
