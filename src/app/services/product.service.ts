import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  item:Item[] = []

  constructor(private http:HttpClient) {
   }
  
  getItems(): Observable<any[]>{
    return this.http.get<Item[]>("assets/data.json")
  }

  sendProduct(item: Item){
    this.item[0] = item;
  }
}
