import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cardItemList: any[] = [];
  itemsCount = new BehaviorSubject<number>(0);
  public productList = new BehaviorSubject<any>([]);

  constructor() { }
  getProducts() {
    return this.productList.asObservable();
  }
  setProduct(product: any) {
    this.cardItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product: any) {
    let itemExists = false;
    this.cardItemList.map((a: any) => {
      if (product.productoId === a.productoId) {
        a.quantity = parseInt(a.quantity) + 1;
        a.total = parseInt(a.quantity) * parseInt(a.precio);
        itemExists = true;
      }
    });
    if (!itemExists) {
      this.cardItemList.push(product);
    }
    this.productList.next(this.cardItemList);
    this.getTotalPrice();
    this.itemsCount.next(this.itemsCount.value + 1);
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cardItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any) {
    this.cardItemList.map((a: any, index: any) => {
      if (product.productoId === a.productoId) {
        this.cardItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cardItemList);
  }
  removeAllCart() {
    this.cardItemList = [];
    this.productList.next(this.cardItemList);
  }
}
