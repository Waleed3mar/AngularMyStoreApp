import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../models/item';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { userInfo } from '../types/userInfo.type';
import { SubmitService } from '../services/submit.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Item[] = [];
  totalPrice=0
  sub:Subscription;
  sub2:Subscription;

  tempQuantity = 1
  count = 0

  //confirmation values
  name=''
  address=''
  card= 1324567851235479
  total=this.totalPrice
  

  constructor(private cartService:CartService, private submitService:SubmitService, private router: Router) {
    this.sub = this.cartService.products$.subscribe((products) => {
      this.products = products
    } );
    this.sub2 = this.cartService.price$.subscribe((price) => {
      this.totalPrice = Math.round(price)
    } );
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if(this.totalPrice==0){
      alert("You Didn't Order Any Item!" )
      return
    }

    const form: userInfo = {
      name: this.name,
      address: this.address,
      card: this.card,
      total: this.totalPrice
    }
    this.submitService.checkOut(form);
    this.cartService.clearCart();
    this.router.navigate(['/confirmation'])
  }
  
  // ngOnDistroy(){
  //     this.sub.unsubscribe()
  //     this.sub2.unsubscribe()
  //     console.log('destroyed')
  //   }  
}
