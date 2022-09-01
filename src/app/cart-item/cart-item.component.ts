import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../models/item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() products: Item;

  @Output() removePrice:EventEmitter<Item> = new EventEmitter

  constructor(private cartService:CartService,) { 
    this.products = {
      id: 1,
      name: '',
      price: 0,
      url: '',
      description:'',
      quantity:0,
      totalPrice:0
        }
        
  }

  ngOnInit(): void {
    
  }

  removeFromCart(product:Item): void{
    this.cartService.removeFromCart(product)
    window.alert('Product removed');
  }

  changeQuantity(id:number,a:any){
    console.log(a);
    this.cartService.changeQuantity(id,a)
   return a 
  }

}
