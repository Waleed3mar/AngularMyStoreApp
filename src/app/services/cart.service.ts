import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Item[] = [];
  price : number = 0
  products$ = new BehaviorSubject<Item[]>(this.products);
  price$ = new BehaviorSubject<number>(this.price);

  newQua = 0



  constructor() {}

  addToCart(product: Item) {
    const index = this.products.findIndex(x => x.id == product.id);
    var t = JSON.parse(JSON.stringify(product))
    
    if(index == -1){
      this.products.push(t);
    }else{
      let y = this.calcQuan(String(this.products[index].quantity), String(product.quantity));
      this.products[index].quantity = y;
      this.products[index].totalPrice = y * this.products[index].price;
      
      
      
      //debug
      console.log( 'newQ: '+ typeof(product.quantity) + '  ' + product.quantity );
      console.log( 'oldQ: '+ typeof(this.products[index].quantity) + '  ' + this.products[index].quantity);
      console.log( 'y: '+ typeof(y) + '  ' + y );
      console.log(y);
      
    }
    this.changePrice()
    this.products$.next(this.products)
    this.price$.next(this.price)
    return this.products;

  }
  calcQuan(a:any, b:any): number{

    let total = parseInt(a)+parseInt(b)
    return total
  }

  removeFromCart(product:Item): void{
    this.products = this.products.filter(p => p.id !== product.id);
    this.changePrice()
    this.products$.next(this.products)
    this.price$.next(this.price)
  }

  clearCart(): void{

    this.products =[]
    this.changePrice()
    this.products$.next(this.products)
    this.price$.next(this.price)
  }

  changePrice(){
    this.price = 0
    for(let i=0; i< this.products.length; i++){
    this.price += this.products[i].totalPrice
  }
    // this.products$.next(this.products)
    this.price$.next(this.price)
    
  }

  changeQuantity(id:number,newQ: number){
    const index = this.products.findIndex(x => x.id == id);
    this.products[index].quantity = newQ
    this.products[index].totalPrice = newQ * this.products[index].price;
    this.changePrice()
    this.price$.next(this.price);
  }
  

}
