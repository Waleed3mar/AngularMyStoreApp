import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../models/item';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

@Input() item: Item;

tempQuantity= 1
// z=false;

  constructor(private cartService:CartService, private prodService:ProductService) { 
    this.item = {
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

  addToCart(): void{
    this.item.quantity = this.tempQuantity;
    this.item.totalPrice = this.item.price *this.item.quantity
    this.cartService.addToCart(this.item);

    window.alert('item added')
  }
  pushProduct(item:Item){
    this.prodService.sendProduct(item)

  }

}
