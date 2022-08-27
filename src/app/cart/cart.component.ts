import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { userInfo } from '../types/userInfo.type';
import { SubmitService } from '../services/submit.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Item[] = [];
  // quantity = 0
  test:any = [];
  totalPrice=0

  tempQuantity = 1

  //confirmation values
  name=''
  address=''
  card=0
  total=this.totalPrice
  

  constructor(private cartService:CartService, private submitService:SubmitService, private router: Router) {}

  ngOnInit(): void {
    
    this.products = this.cartService.getCart()
    
    // this.products = this.test;
    

    for(let i=0;i<this.products.length; i++){
      const x = this.products[i];
      this.totalPrice += ( x.quantity * x.price); 
    }
  }

  removeFromCart(product:Item): void{
    this.products = this.products.filter(p => p.id !== product.id)
    this.cartService.removeFromCart(product)
  }
  onSubmit() {
    const form: userInfo = {
      name: this.name,
      address: this.address,
      card: this.card,
      total: this.total
    }
    this.submitService.checkOut(form);
    this.router.navigate(['/confirmation'])
  }

}
