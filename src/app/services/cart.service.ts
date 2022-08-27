import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Item[] = []
  quantity =''


  constructor() { 
  }


  getCart() {
    return this.products
  }

  addToCart(product: Item) {
    this.products.push(product)

    return this.products;

  }

  

  removeFromCart(product:Item): void{
    this.products = this.products.filter(p => p.id !== product.id)
  }
  
}
