import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent implements OnInit {
  listProduct : Product[];
  constructor() { }

  ngOnInit(): void {
    this.listProduct=[
      {id : "123",title:"T-shirt-1",desciption:"couleur-noir.....",price:12,quantity:0,nbrLike:2,category:'category-1',
        picture:'assets/ts-1.jpg'},
      {id : "89",title:"T-shirt-2",desciption:"couleur-blanc.....",price:20,quantity:10,nbrLike:0,category:'category-2',
        picture:'assets/ts-1.jpg'},
      {id : "123",title:"T-shirt-2",desciption:"couleur-bege.....",price:30,quantity:5,nbrLike:2,category:'category-3',
        picture:'assets/ts-1.jpg'}
    ]
  }
  like(p:Product){
    let i = this.listProduct.indexOf(p);
    this.listProduct[i].nbrLike++;
  }
}
