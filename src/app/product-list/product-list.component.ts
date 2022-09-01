import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Item[] = [];
  constructor(private prodService:ProductService ) { }

  ngOnInit(): void {
    this.prodService.getItems().subscribe(items =>{      
      this.products= items;
    })
  }
}
