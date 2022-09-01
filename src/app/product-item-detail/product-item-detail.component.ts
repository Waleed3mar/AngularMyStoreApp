import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  productDetails:Item;
  tempQuantity= 1

  id =0 ;
  
  constructor(private prodService:ProductService,private cartService:CartService) { 
    this.productDetails ={
      id:0,
      name:'',
      url:'',
      description:'',
      price:0,
      quantity:0,
      totalPrice:0

    }
  }

  ngOnInit(): void {
    this.productDetails = this.prodService.item[0]
  }
  addToCart(): void{
    this.productDetails.quantity = this.tempQuantity;
    this.productDetails.totalPrice = this.productDetails.price *this.productDetails.quantity
    this.cartService.addToCart(this.productDetails);

    // if (!this.z){this.item.quantity = 1}

    window.alert('item added')
    
  }

}
